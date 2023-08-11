import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articleList: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
    const {
        className = '',
        articleList,
        view = ArticleView.BIG,
        isLoading
    } = props;

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem
                article={ article }
                view={ view }
            />
        );
    }, [view]);

    return (
        <div className={ classNames(cls.ArticleList, {}, [className]) }>
            {
                articleList.map(renderArticle)
            }
        </div>
    );
});

ArticleList.displayName = 'ArticleList';
