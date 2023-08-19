import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { type SortOrder } from 'shared/types/sortTypes';

export const getArticlesPageView = (state: StateSchema): ArticleView => state.articlesPage?.view ?? ArticleView.SMALL;
export const getArticlesPageError = (state: StateSchema): string => state.articlesPage?.error ?? '';
export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlesPage?.isLoading ?? false;
export const getArticlesPageLimit = (state: StateSchema): number => state.articlesPage?.limit ?? 6;
export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page ?? 1;
export const getArticlesPageHasMore = (state: StateSchema): boolean => state.articlesPage?.hasMore ?? true;
export const getArticlesPageInited = (state: StateSchema): boolean => state.articlesPage?._inited ?? false;
export const getArticlesPageSortField = (state: StateSchema): ArticleSortField => state.articlesPage?.sortField ?? ArticleSortField.CREATED;
export const getArticlesPageSortOrder = (state: StateSchema): SortOrder => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema): string => state.articlesPage?.search ?? '';
