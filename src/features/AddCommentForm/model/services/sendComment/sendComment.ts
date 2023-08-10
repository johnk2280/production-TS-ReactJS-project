import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCommentFormText } from './../../selectors/getCommentForm';

export const sendComment = createAsyncThunk<
IComment,
void | never,
ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (_, thunkApi) => {
        const { dispatch, rejectWithValue, extra, getState } = thunkApi;
        const article = getArticleDetailsData(getState());
        const text = getCommentFormText(getState());
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
