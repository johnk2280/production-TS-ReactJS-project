import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type IComment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getCommentFormText } from 'features/AddCommentForm/model/selectors/getCommentForm';

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

        try {
            const response = await extra.api.post<IComment>(
                '/comments/',
                {
                    articleId: article?.id
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
