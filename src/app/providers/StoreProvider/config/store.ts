import { configureStore, type EnhancedStore } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
    return configureStore({
        reducer: {},
        preloadedState: initialState,
        devTools: __IS_DEV__
    })
}
