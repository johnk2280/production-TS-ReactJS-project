import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type Article, ArticleView } from 'entities/Article';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articlesPageAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
        view: ArticleView.SMALL
    }),
    reducers: {
        setView: (state, action) => {
            state.view = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.error = '';
                state.isLoading = false;
                articlesPageAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.payload ?? 'error';
                state.isLoading = false;
            });
    }
});
