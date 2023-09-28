import { type FC, memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useSelector } from 'react-redux';
import {
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageSortOrder, getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPage';
import { type ArticleSortField, ArticleType, type ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { Card } from '@/shared/ui/Card/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { type SortOrder } from '@/shared/types/sortTypes';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { type TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';

interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter: FC<ArticlesPageFilterProps> = memo((props: ArticlesPageFilterProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('articles-page');
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sortField = useSelector(getArticlesPageSortField);
    const sortOrder = useSelector(getArticlesPageSortOrder);
    const search = useSelector(getArticlesPageSearch);
    const articleType = useSelector(getArticlesPageType);

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        }

    ], [t]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSortOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        setSearchParams(`_sort=${sortField}&_order=${newOrder}&q=${search}&type=${articleType}`);
        fetchData();
    }, [articleType, dispatch, fetchData, search, setSearchParams, sortField]);

    const onChangeSortField = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        setSearchParams(`_sort=${newSort}&_order=${sortOrder}&q=${search}&type=${articleType}`);
        fetchData();
    }, [articleType, dispatch, fetchData, search, setSearchParams, sortOrder]);

    const onChangeSearch = useCallback((text: string) => {
        dispatch(articlesPageActions.setSearch(text));
        dispatch(articlesPageActions.setPage(1));
        setSearchParams(`_sort=${sortField}&_order=${sortOrder}&q=${text}&type=${articleType}`);
        debouncedFetchData();
    }, [articleType, debouncedFetchData, dispatch, setSearchParams, sortField, sortOrder]);

    const onChangeType = useCallback((tab: TabItem) => {
        // TODO: пофиксить костыльное приведение типа по аналогии с Select
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        setSearchParams(`_sort=${sortField}&_order=${sortOrder}&q=${search}&type=${tab.value}`);
        fetchData();
    }, [dispatch, fetchData, search, setSearchParams, sortField, sortOrder]);

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
            <Tabs
                tabs={ typeTabs }
                value={ articleType }
                onTabClick={ onChangeType }
            />
        </div>
    );
});

ArticlesPageFilter.displayName = 'ArticlesPageFilter';
