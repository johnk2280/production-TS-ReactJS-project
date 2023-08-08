import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type IComment } from 'entities/Comment';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments ?? commentsAdapter.getInitialState()
);

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false
    }),
    reducers: {}
});

export const { reducer: articleDetailCommentsReducer } = articleDetailsCommentsSlice;
