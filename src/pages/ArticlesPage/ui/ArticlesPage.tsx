import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList, type ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView
} from '../model/selectors/articlesPage';
import cls from './ArticlesPage.module.scss';
import { Page } from 'shared/ui/Page/Page';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
};

export const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className = ''
    } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({
                page: page + 1
            }));
        }
    }, [dispatch, hasMore, isLoading, page]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initView());
        dispatch(fetchArticles({
            page: 1
        }));
    });

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Page
                onScrollEnd={ onLoadNextPart }
                className={ classNames(cls.ArticlesPage, {}, [className]) }
            >
                <ArticleViewSelector
                    onClickView={ onChangeView }
                    view={ view }
                />
                <ArticleList
                    isLoading={ isLoading }
                    articleList={ articles }
                    view={ view }
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
