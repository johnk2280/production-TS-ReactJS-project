import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import { getArticlesPageInited } from '../../selectors/articlesPage';

export const initArticlesPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (params, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(articlesPageActions.initView());
            dispatch(fetchArticles({
                page: 1
            }));
        }
    }
);
