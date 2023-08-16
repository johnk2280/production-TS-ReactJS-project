import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum
} from 'pages/ArticlesPage/model/selectors/articlesPage';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';

export const fetchNextArticles = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
    'articlesPage/fetchNextArticles',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({
                page: page + 1
            }));
        }
    }
);
