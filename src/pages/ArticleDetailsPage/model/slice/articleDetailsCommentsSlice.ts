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
        ids: ['1', '2'],
        entities: {
            1: {
                id: '1',
                text: 'comment1',
                user: { id: '1', username: 'user 1' }
            },
            2: {
                id: '2',
                text: 'comment2',
                user: { id: '2', username: 'user 2' }
            }
        },
        error: undefined,
        isLoading: false
    }),
    reducers: {}
});

export const { reducer: articleDetailCommentsReducer } = articleDetailsCommentsSlice;
