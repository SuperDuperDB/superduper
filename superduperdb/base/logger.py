import os
import socket
from sys import stderr
from tqdm import tqdm
from loguru import logger
from .configs import CFG
from loki_logger_handler.loki_logger_handler import (LoguruFormatter, LokiLoggerHandler)
from superduperdb.base.config import LogLevel, LogType

__all__ = ('Logging',)


class Logging:
    if CFG.logging.type == LogType.LOKI:  # Send logs to Loki
        custom_handler = LokiLoggerHandler(
            url=os.environ["LOKI_URI"],
            labels={"application": "Test", "environment": "Develop"},
            labelKeys={},
            timeout=10,
            defaultFormatter=LoguruFormatter(),
        )

        logger.configure(handlers=[{"sink": custom_handler, "serialize": True}])
    else:
        # Replace default logger with a custom SuperDuper format.
        logger.remove()

        # Enrich logger with additional information.
        logger.configure(extra={
            "hostname": socket.gethostname(),
        })

        fmt = (
            " <green> {time:YYYY-MMM-DD HH:mm:ss}</green> | <level>{level: <8}</level> |"
            " <cyan><{extra[hostname]}></cyan>:<cyan>{name}</cyan>:<cyan>{line}</cyan> |"
            " <level> {message} </level>"
        )

        # DEBUG until WARNING are sent to stdout.
        logger.add(
            lambda msg: tqdm.write(msg, end=""),
            format=fmt,
            level=CFG.logging.level,
            filter=lambda record: record["level"].no < 40,
            colorize=True,
        )

        # ERROR and above sent to stderr
        # https://loguru.readthedocs.io/en/stable/api/logger.html
        logger.add(
            stderr,
            format=fmt,
            level=LogLevel.ERROR,
            colorize=True,
        )

    # Set Multi-Key loggers
    # Example: logging.info("param 1", "param 2", ..)
    @staticmethod
    def multikey_debug(msg: str, *args):
        logger.opt(depth=1).debug(" ".join(map(str, (msg, *args))))

    @staticmethod
    def multikey_info(msg: str, *args):
        logger.opt(depth=1).info(" ".join(map(str, (msg, *args))))

    @staticmethod
    def multikey_success(msg: str, *args):
        logger.opt(depth=1).success(" ".join(map(str, (msg, *args))))

    @staticmethod
    def multikey_warn(msg: str, *args):
        logger.opt(depth=1).warning(" ".join(map(str, (msg, *args))))

    @staticmethod
    def multikey_error(msg: str, *args):
        logger.opt(depth=1).error(" ".join(map(str, (msg, *args))))

    debug = multikey_debug
    info = multikey_info
    success = multikey_success
    warn = multikey_warn
    error = multikey_error
