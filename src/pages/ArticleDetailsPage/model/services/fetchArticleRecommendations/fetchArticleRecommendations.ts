import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
Article[],
void | never,
ThunkConfig<string>
>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>(
                '/articles',
                {
                    params: {
                        _limit: 4
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
