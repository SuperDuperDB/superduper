import typing as t
from superduperdb.jobs.job import ComponentJob

class LocalSequentialQueue:
    def __init__(self):
        self.queue = {}
        self.components = {}
        self.db = None
        self._component_map = {}

    def declare_component(self, component):
        identifier =f'{component.type_id}.{component.identifier}' 
        self.queue[identifier] = []
        self.components[identifier] = component

    def set_db(self, db):
        self.db = db

    def publish(self, event: t.Dict , to: t.Dict[str, str]):
        identifier = to['identifier']
        type_id = to['type_id']
        self._component_map.update(to)
        
        self.queue[f'{type_id}.{identifier}'].extend(event)
        self.consume()

    def consume(self):
        for component in self.queue:
            events  = self.queue[component]
            if not events:
                continue
            self.queue[component] = []

            component = self.components[component]

            component.on_db_event(self.db, events)
