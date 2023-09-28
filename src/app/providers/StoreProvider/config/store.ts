import {
    type AnyAction,
    type CombinedState,
    configureStore,
    type Reducer,
    type ReducersMapObject,
    type ThunkDispatch
} from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtraArgs } from '../config/StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { UIReducer } from '@/features/UI';
import { rtkApi } from '@/shared/api/rtkApi';

// Возникают ошибки из-за возвращаемого типа, если явно указать type EnhancedStore,
// тогда, как возвращается type:
// EnhancedStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction, undefined>]>
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: UIReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgs = {
        api: $api
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        }).concat(rtkApi.middleware)
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type AppDispatch = ThunkDispatch<CombinedState<StateSchema>, ThunkExtraArgs, AnyAction>;
export type RootState = ReturnType<typeof createReduxStore>['getState'];
