import { type EntityState } from '@reduxjs/toolkit';
import type { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { type SortOrder } from 'shared/types/sortTypes';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view: ArticleView;
    order: SortOrder;
    sortField: ArticleSortField;
    search: string;
    _inited: boolean;
}
