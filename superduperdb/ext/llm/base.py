import abc
import concurrent.futures
import dataclasses as dc
import inspect
import typing as t
from functools import reduce
from logging import WARNING, getLogger

from superduperdb import logging
from superduperdb.backends.query_dataset import QueryDataset
from superduperdb.components.component import ensure_initialized
from superduperdb.components.model import _Predictor
from superduperdb.ext.llm.prompter import Prompter

if t.TYPE_CHECKING:
    from superduperdb.base.datalayer import Datalayer

# Disable httpx info level logging
getLogger("httpx").setLevel(WARNING)


@dc.dataclass(kw_only=True)
class BaseLLM(_Predictor, metaclass=abc.ABCMeta):
    """
    :param prompt_template: The template to use for the prompt.
    :param prompt_func: The function to use for the prompt.
    :param max_batch_size: The maximum batch size to use for batch generation.
    :param predict_kwargs: Parameters used during inference.
    """

    prompt: str = "{input}"
    prompt_func: t.Optional[t.Callable] = dc.field(default=None)
    max_batch_size: t.Optional[int] = 4
    signature: t.ClassVar[str] = 'singleton'

    def __post_init__(self, artifacts):
        super().__post_init__(artifacts)
        self.takes_context = True
        self.identifier = self.identifier.replace("/", "-")

    def to_call(self, X, *args, **kwargs):
        raise NotImplementedError

    def post_create(self, db: "Datalayer") -> None:
        # TODO: Do not make sense to add this logic here,
        # Need a auto DataType to handle this
        from superduperdb.backends.ibis.data_backend import IbisDataBackend
        from superduperdb.backends.ibis.field_types import dtype

        if isinstance(db.databackend, IbisDataBackend) and self.datatype is None:
            self.datatype = dtype("str")

        super().post_create(db)

    @abc.abstractmethod
    def init(self):
        ...

    def _generate(self, prompt: str, **kwargs: t.Any):
        raise NotImplementedError

    def _batch_generate(self, prompts: t.List[str], **kwargs) -> t.List[str]:
        """
        Base method to batch generate text from a list of prompts.
        If the model can run batch generation efficiently, pls override this method.
        """
        return [self._generate(prompt, **self.predict_kwargs) for prompt in prompts]

    @ensure_initialized
    def predict_one(self, X: t.Union[str, dict[str, str]], context=None, **kwargs):
        x = self.prompter(X, context=context, **kwargs)
        return self._generate(x, **kwargs)

    @ensure_initialized
    def predict(self, dataset: t.Union[t.List, QueryDataset], **kwargs) -> t.Sequence:
        xs = [self.prompter(dataset[i], **kwargs) for i in range(len(dataset))]
        kwargs.pop("context", None)
        return self._batch_generate(xs, **kwargs)

    def get_kwargs(self, func, *kwargs_list):
        """
        Get kwargs and object attributes that are in the function signature
        :param func (Callable): function to get kwargs for
        :param kwargs (list of dict): kwargs to filter
        """

        total_kwargs = reduce(lambda x, y: {**y, **x}, [self.dict(), *kwargs_list])
        sig = inspect.signature(func)
        new_kwargs = {}
        for k, v in total_kwargs.items():
            if k in sig.parameters:
                new_kwargs[k] = v
        return new_kwargs

    @property
    def prompter(self):
        return Prompter(self.prompt, self.prompt_func)


@dc.dataclass
class BaseLLMAPI(BaseLLM):
    """
    :param api_url: The URL for the API.
    {parent_doc}
    """

    __doc__ = __doc__.format(parent_doc=BaseLLM.__doc__)

    api_url: str = dc.field(default="")

    def init(self):
        pass

    def _generate_wrapper(self, prompt: str, **kwargs: t.Any) -> str:
        """
        Wrapper for the _generate method to handle exceptions.
        """
        try:
            return self._generate(prompt, **kwargs)
        except Exception as e:
            logging.error(f"Error generating response for prompt '{prompt}': {e}")
            return ""

    def _batch_generate(self, prompts: t.List[str], **kwargs: t.Any) -> t.List[str]:
        """
        Base method to batch generate text from a list of prompts using multi-threading.
        Handles exceptions in _generate method.
        """
        with concurrent.futures.ThreadPoolExecutor(
            max_workers=self.max_batch_size
        ) as executor:
            results = list(
                executor.map(
                    lambda prompt: self._generate_wrapper(prompt, **kwargs), prompts
                )
            )

        return results
