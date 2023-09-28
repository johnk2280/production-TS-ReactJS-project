import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { Page } from '@/widgets/Page';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ false }>
            <Page
                onScrollEnd={ onLoadNextPart }
                className={ classNames(cls.ArticlesPage, {}, [className]) }
            >
                <ArticlesPageFilter/>
                <ArticleInfiniteList/>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
