import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Article, ArticleSortField, ArticleView } from 'entities/Article';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticles } from './../services/fetchArticles/fetchArticles';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

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
        view: ArticleView.SMALL,
        limit: 3,
        hasMore: true,
        page: 1,
        _inited: false,
        sortField: ArticleSortField.CREATED,
        order: 'asc',
        search: ''
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initView: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY);
            state.view = view as ArticleView;
            state.limit = view === ArticleView.BIG ? 3 : 6;
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
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
                articlesPageAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.payload ?? 'error';
                state.isLoading = false;
            });
    }
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions
} = articlesPageSlice;
