import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

import {
    type ArticleDetailsRecommendationsSchema
} from '../../model/types/ArticleDetailsRecommendationsSchema';
import { type Article } from 'entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations ?? recommendationsAdapter.getInitialState()
);

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false
    }),
    reducers: {}
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = '';
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
    //             state.error = '';
    //             state.isLoading = false;
    //             recommendationsAdapter.setAll(state, action.payload);
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.isLoading = false;
    //         });
    // }
});

export const {
    reducer: articleDetailPageRecommendationsReducer,
    actions: articleDetailPageRecommendationsAction
} = articleDetailsPageRecommendationsSlice;
