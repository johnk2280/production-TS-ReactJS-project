import { type FC, memo, type ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleListProps {
    className?: string;
    articleList: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView): ReactNode[] => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={ index } view={ view } className={ cls.card }/>
        ));
};
export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
    const {
        className = '',
        articleList,
        view = ArticleView.SMALL,
        isLoading
    } = props;
    const { t } = useTranslation('articles-page');

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem
                className={ cls.card }
                article={ article }
                view={ view }
                key={ article.id }
            />
        );
    }, [view]);

    if (!isLoading && !articleList.length) {
        return (
            <div className={ classNames(cls.ArticleList, {}, [className, cls[view]]) }>
                <Text size={ TextSize.L } title={ t('Статьи не найдены') }/>
            </div>
        );
    }

    return (
        <div className={ classNames(cls.ArticleList, {}, [className, cls[view]]) }>
            { articleList.length ? articleList.map(renderArticle) : null }
            { isLoading && getSkeletons(view) }
        </div>
    );
});

ArticleList.displayName = 'ArticleList';
