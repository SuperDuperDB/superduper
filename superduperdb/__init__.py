from .misc import config, configs
from .misc.jsonable import JSONable
from pathlib import Path

__all__ = 'CFG', 'ICON', 'JSONable', 'ROOT', 'config', 'log'

CFG = configs.CONFIG.config
ICON = '🔮'
ROOT = Path(__file__).parent

from .misc import logger  # noqa: E402

log = logger.logging
