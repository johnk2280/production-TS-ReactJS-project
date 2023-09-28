import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type IComment } from '@/entities/Comment';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import {
    fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments ?? commentsAdapter.getInitialState()
);

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.error = '';
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export const { reducer: articleDetailCommentsReducer } = articleDetailsCommentsSlice;
