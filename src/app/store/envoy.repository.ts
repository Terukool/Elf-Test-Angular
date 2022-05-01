import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';

export interface EnvoyProps {
    name: string;
}

const store = createStore({ name: 'envoy' }, withProps<EnvoyProps>({ name: "bob" }));

@Injectable({
    providedIn: 'root'
})
export class EnvoyRepository {
    name$ = store.pipe(select(store => store.name));

    updateName(name: string) {
        store.update(store => ({ ...store, name }));
    }
}