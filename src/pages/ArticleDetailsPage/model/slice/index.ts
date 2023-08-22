import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from '../types';
import { articleDetailCommentsReducer } from '../slice/articleDetailsCommentsSlice';
import {
    articleDetailPageRecommendationsReducer
} from '../slice/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailCommentsReducer,
    recommendations: articleDetailPageRecommendationsReducer
});
