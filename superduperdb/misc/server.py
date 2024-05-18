import base64
import json
from functools import lru_cache

import requests

from superduperdb import CFG, logging
from superduperdb.base import exceptions
from superduperdb.misc.auto_schema import DEFAULT_DATATYPE

primitives = (bool, str, int, float, type(None))

@lru_cache(maxsize=None)
def _handshake(service: str):
    endpoint = 'handshake/config'
    cfg = json.dumps(CFG.comparables)
    _request_server(service, args={'cfg': cfg}, endpoint=endpoint)

def server_request_decoder(x):
    """
    Decodes a request to `SuperDuperApp` service.

    :param x: Object to decode.
    """
    x = x['_b64data']
    x = DEFAULT_DATATYPE.decoder(  base64.b64decode(x))
    return x

def _server_request_encoder(x):
    x = DEFAULT_DATATYPE.encoder(x)  
    return {'_b64data': base64.b64encode(x).decode()}

def _request_server(
    service: str = 'vector_search', data=None, endpoint='add', args={}, type='post'
):
    if service == 'cdc':
        service_uri = CFG.cluster.cdc.uri
    elif service == 'vector_search':
        service_uri = CFG.cluster.vector_search.uri
    else:
        raise NotImplementedError(f'Unknown service {service}')

    assert isinstance(service_uri, str)
    service_uri = 'http://' + ''.join(service_uri.split('://')[1:])

    url = service_uri + '/' + endpoint
    logging.debug(f'Trying to connect {service} at {url} method: {type}')

    if type == 'post':
        if data is not None:
            # TODO: Please use Document.encode with autoschema.

            if not isinstance(data, primitives):
                data = _server_request_encoder(data)
                                                 

        response = requests.post(url, json=data, params=args)
        result = json.loads(response.content)
    else:
        response = requests.get(url, params=args)
        result = None
    if response.status_code != 200:
        error = json.loads(response.content)
        msg = f'Server error at {service} with {response.status_code} :: {error}'
        raise exceptions.ServiceRequestException(msg)
    return result


def request_server(
    service: str = 'vector_search', data=None, endpoint='add', args={}, type='post'
):
    """Request server with data.

    :param service: Service name
    :param data: Data to send
    :param endpoint: Endpoint to hit
    :param args: Arguments to pass
    :param type: Type of request
    """
    _handshake(service)
    return _request_server(
        service=service, data=data, endpoint=endpoint, args=args, type=type
    )
