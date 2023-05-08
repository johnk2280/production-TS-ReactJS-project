import { configureStore, type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '../config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User/model';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: __IS_DEV__
    });
}
