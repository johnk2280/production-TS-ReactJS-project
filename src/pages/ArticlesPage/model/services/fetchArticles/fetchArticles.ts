import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageSortOrder
} from 'pages/ArticlesPage/model/selectors/articlesPage';

export const fetchArticles = createAsyncThunk<
Article[],
void | never,
ThunkConfig<string>
>(
    'articlesPage/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const sortField = getArticlesPageSortField(getState());
        const sortOrder = getArticlesPageSortOrder(getState());
        const search = getArticlesPageSearch(getState());

        try {
            const response = await extra.api.get<Article[]>(
                '/articles',
                {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sortField,
                        _order: sortOrder,
                        q: search
                    }
                }
            );

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            let message: string = '';
            if (e instanceof Error) {
                message = e.message;
            }
            return rejectWithValue(message);
        }
    }
);
