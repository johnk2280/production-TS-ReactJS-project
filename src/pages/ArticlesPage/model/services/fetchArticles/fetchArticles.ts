import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPage';

interface FetchArticleProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<
Article[],
FetchArticleProps,
ThunkConfig<string>
>(
    'articlesPage/fetchArticles',
    async (params, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = params;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>(
                '/articles',
                {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page
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
