import { configureStore, type EnhancedStore } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'
import { counterReducer } from 'entities/Counter'

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        preloadedState: initialState,
        devTools: __IS_DEV__
    })
}
