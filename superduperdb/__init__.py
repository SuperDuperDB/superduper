from .misc import configs
from .misc.serializable import Serializable
from pathlib import Path
import os

__all__ = 'CFG', 'ICON', 'ROOT', 'Serializable'

CFG = configs.CONFIG.config
ICON = '🔮'
ROOT = Path(__file__).parent

if openai := CFG.apis.providers.get('openai'):
    assert openai.api_key
    os.environ['OPENAI_API_KEY'] = openai.api_key
