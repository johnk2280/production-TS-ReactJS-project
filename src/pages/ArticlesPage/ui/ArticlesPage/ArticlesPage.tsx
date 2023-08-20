import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { Page } from 'widgets/Page';
import { ArticlesPageFilter } from 'pages/ArticlesPage/ui/ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';

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
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ false }>
            <Page
                onScrollEnd={ onLoadNextPart }
                className={ classNames(cls.ArticlesPage, {}, [className]) }
            >
                <ArticlesPageFilter/>
                <ArticleList
                    className={ cls.list }
                    isLoading={ isLoading }
                    articleList={ articles }
                    view={ view }
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
