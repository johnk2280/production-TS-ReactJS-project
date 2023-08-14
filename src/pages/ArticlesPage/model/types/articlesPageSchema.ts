import { type EntityState } from '@reduxjs/toolkit';
import { type Article } from 'entities/Article';
import { type ArticleType } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleType;
}
