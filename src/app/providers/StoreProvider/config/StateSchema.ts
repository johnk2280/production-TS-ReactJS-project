import type { NavigateFunction } from 'react-router-dom';
import type {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';

import type { AxiosInstance } from 'axios';

import type { UserSchema } from 'entities/User';
import type { CounterSchema } from 'entities/Counter';
import type { LoginSchema } from 'features/AuthByUsername';
import type { ProfileSchema } from 'entities/Profile';
import type { ArticleDetailSchema } from 'entities/Article';
import type { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage';
import type { AddCommentFormSchema } from 'features/AddCommentForm';
import type { ArticlesPageSchema } from 'pages/ArticlesPage';
import { type UISchema } from 'features/UI';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UISchema;

    // Асинхронные редюсеры.
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
    navigate?: NavigateFunction; // (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    state: StateSchema;
}
