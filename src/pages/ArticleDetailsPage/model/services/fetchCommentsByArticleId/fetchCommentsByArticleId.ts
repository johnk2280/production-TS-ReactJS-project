import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IComment } from 'entities/Comment';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const fetchCommentsByArticleId = createAsyncThunk<
IComment[],
string | undefined,
ThunkConfig<string>
>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) {
            throw new Error();
        }

        try {
            const response = await extra.api.get<IComment[]>(
                '/comments',
                {
                    params: {
                        articleId,
                        _expand: 'user'
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
