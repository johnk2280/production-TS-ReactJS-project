import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхронные редюсеры.
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
    navigate: NavigateFunction; // (to: To, options?: NavigateOptions) => void;
}
