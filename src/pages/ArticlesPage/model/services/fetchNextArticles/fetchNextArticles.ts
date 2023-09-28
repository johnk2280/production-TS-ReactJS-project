import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

export const fetchNextArticles = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
    'articlesPage/fetchNextArticles',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const page = getArticlesPageNum(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({}));
        }
    }
);
