import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article, ArticleType } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageSortOrder,
    getArticlesPageType
} from '../../selectors/articlesPage';

interface FetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
Article[],
FetchArticlesProps,
ThunkConfig<string>
>(
    'articlesPage/fetchArticles',
    async (params, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { replace } = params;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const sortField = getArticlesPageSortField(getState());
        const sortOrder = getArticlesPageSortOrder(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());

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
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type
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
