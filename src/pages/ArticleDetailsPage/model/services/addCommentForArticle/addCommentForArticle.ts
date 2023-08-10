import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import {
    fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
IComment,
string,
ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const { dispatch, rejectWithValue, extra, getState } = thunkApi;
        const article = getArticleDetailsData(getState());
        const userData = getUserAuthData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post<IComment>(
                '/comments/',
                {
                    articleId: article?.id,
                    userId: userData?.id,
                    text
                }
            );

            dispatch(fetchCommentsByArticleId(article.id));

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
