import { createSlice } from '@reduxjs/toolkit';
import type { ArticleDetailSchema } from '../types/articleDetailSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailSchema = {
    data: undefined,
    error: undefined,
    isLoading: false
};

export const articleDetailSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action) => {
                state.error = '';
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload ?? 'error';
                state.isLoading = false;
            });
    }
});

export const { actions: articleDetailsActions } = articleDetailSlice;
export const { reducer: articleDetailsReducer } = articleDetailSlice;
