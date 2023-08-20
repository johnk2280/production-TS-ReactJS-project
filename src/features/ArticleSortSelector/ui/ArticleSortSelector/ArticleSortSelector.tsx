import { type FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, type SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article';
import { type SortOrder } from 'shared/types/sortTypes';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSortField: (newSortField: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props: ArticleSortSelectorProps) => {
    const {
        className = '',
        sort,
        order,
        onChangeSortField,
        onChangeOrder
    } = props;
    const { t } = useTranslation('articles-page');

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t]);

    const sortOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED_AT,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров')
        }
    ], [t]);

    return (
        <div className={ classNames(cls.ArticleSortSelector, {}, [className]) }>
            <Select
                label={ t('Сортировать по') }
                options={ sortOptions }
                value={ sort }
                onChange={ onChangeSortField }
            />
            <Select
                className={ cls.order }
                label={ t('По') }
                options={ orderOptions }
                value={ order }
                onChange={ onChangeOrder }
            />
        </div>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
