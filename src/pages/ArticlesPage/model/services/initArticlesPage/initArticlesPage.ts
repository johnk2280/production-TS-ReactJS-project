import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { type SortOrder } from '@/shared/types/sortTypes';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<
void | never,
URLSearchParams,
ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (params, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(
                articlesPageActions.setOrder(params.get('_order') as SortOrder ?? 'asc')
            );
            dispatch(
                articlesPageActions.setSort(
                    params.get('_sort') as ArticleSortField ?? ArticleSortField.CREATED_AT
                )
            );
            dispatch(
                articlesPageActions.setSearch(params.get('q') ?? '')
            );
            dispatch(
                articlesPageActions.setType(params.get('type') as ArticleType ?? ArticleType.ALL)
            );
            dispatch(
                articlesPageActions.initView()
            );
            dispatch(fetchArticles({}));
        }
    }
);
