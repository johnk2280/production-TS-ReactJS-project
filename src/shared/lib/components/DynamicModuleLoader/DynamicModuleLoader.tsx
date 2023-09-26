import { type FC, useEffect, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type ReduxStoreWithManager, type StateSchema } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            { children }
        </>
    );
};
