import re
import sys

import ibis
import mongomock
import pymongo

import superduperdb as s
from superduperdb import logging
from superduperdb.backends.base.backends import data_stores, metadata_stores
from superduperdb.backends.dask.compute import DaskComputeEngine
from superduperdb.backends.local.artifacts import FileSystemArtifactStore
from superduperdb.backends.local.compute import LocalComputeEngine
from superduperdb.backends.mongodb.artifacts import MongoArtifactStore
from superduperdb.base.config import Mode
from superduperdb.base.datalayer import Datalayer


def build_artifact_store(cfg):
    if cfg.artifact_store is None:
        raise ValueError('No artifact store specified')
    elif cfg.artifact_store.startswith('mongodb://'):
        import pymongo

        conn = pymongo.MongoClient('/'.join(cfg.artifact_store.split('/')[:-1]))
        name = cfg.artifact_store.split('/')[-1]
        return MongoArtifactStore(conn, name)
    elif cfg.artifact_store.startswith('filesystem://'):
        directory = cfg.artifact_store.split('://')[1]
        return FileSystemArtifactStore(directory)
    else:
        raise ValueError(f'Unknown artifact store: {cfg.artifact_store}')


# Helper function to build a data backend based on the URI.
def build(uri, mapping):
    logging.debug(f"Parsing data connection URI:{uri}")

    if re.match('^mongodb:\/\/|^mongodb\+srv:\/\/', uri) is not None:
        name = uri.split('/')[-1]
        conn = pymongo.MongoClient(
            uri,
            serverSelectionTimeoutMS=5000,
        )

        return mapping['mongodb'](conn, name)
    elif uri.startswith('mongomock://'):
        name = uri.split('/')[-1]
        conn = mongomock.MongoClient()
        return mapping['mongodb'](conn, name)
    else:
        name = uri.split('//')[0]
        conn = ibis.connect(uri)
        return mapping['ibis'](conn, name)


def build_datalayer(cfg=None, **kwargs) -> Datalayer:
    """
    Build a Datalayer object as per ``db = superduper(db)`` from configuration.

    :param cfg: Configuration to use. If None, use ``superduperdb.CFG``.
    """

    # Configuration
    # ------------------------------
    # Use the provided configuration or fall back to the default configuration.
    cfg = cfg or s.CFG

    # Update configuration with keyword arguments.
    for k, v in kwargs.items():
        cfg.force_set(k, v)

    # Connect to data backend.
    # ------------------------------
    try:
        data_store = build(cfg.data_store_uri, data_stores)
        logging.info("Data Client is ready.", data_store.conn)
    except Exception as e:
        # Exit quickly if a connection fails.
        logging.error("Error initializing to DataStore Client:", str(e))
        sys.exit(1)

    # Build DataLayer
    # ------------------------------
    db = Datalayer(
        data_store=data_store,
        metadata_store=(
            build(cfg.metadata_store, metadata_stores)
            if cfg.metadata_store is not None
            else data_store.build_metadata()
        ),
        artifact_store=(
            build_artifact_store(cfg)
            if cfg.artifact_store is not None
            else data_store.build_artifact_store()
        ),
        compute_engine=(
            DaskComputeEngine(
                cfg.cluster.dask_scheduler,
                local=cfg.cluster.local,
                serializers=cfg.cluster.serializers,
                deserializers=cfg.cluster.deserializers,
            )
            if cfg.mode == Mode.Production
            else LocalComputeEngine()  # Development mode
        ),
    )

    return db
