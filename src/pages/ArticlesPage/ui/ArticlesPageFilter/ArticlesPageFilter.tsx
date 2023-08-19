import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useSelector } from 'react-redux';
import {
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageSortOrder,
    getArticlesPageView
} from '../../model/selectors/articlesPage';
import { type ArticleSortField, type ArticleView } from 'entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { ArticleSortSelector } from 'features/ArticleSortSelector';
import { type SortOrder } from 'shared/types/sortTypes';

interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter: FC<ArticlesPageFilterProps> = memo((props: ArticlesPageFilterProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('articles-page');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sortField = useSelector(getArticlesPageSortField);
    const sortOrder = useSelector(getArticlesPageSortOrder);
    const search = useSelector(getArticlesPageSearch);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSortOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
    }, [dispatch]);

    const onChangeSortField = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
    }, [dispatch]);

    const onChangeSearch = useCallback((text: string) => {
        dispatch(articlesPageActions.setSearch(text));
    }, [dispatch]);

    return (
        <div className={ classNames(cls.ArticlesPageFilter, {}, [className]) }>
            <div className={ cls.sortWrapper }>
                <ArticleSortSelector
                    sort={ sortField }
                    order={ sortOrder }
                    onChangeSortField={ onChangeSortField }
                    onChangeOrder={ onChangeSortOrder }
                />
                <ArticleViewSelector
                    onClickView={ onChangeView }
                    view={ view }
                />
            </div>
            <Card className={ cls.search }>
                <Input
                    placeholder={ t('Поиск') }
                    onChange={ onChangeSearch }
                    value={ search }
                />
            </Card>

        </div>
    );
});

ArticlesPageFilter.displayName = 'ArticlesPageFilter';
