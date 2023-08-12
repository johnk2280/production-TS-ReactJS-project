import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { useNavigate } from 'react-router-dom';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';

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
    const navigate = useNavigate();

    const onClickArticle = useCallback((id: string) => {
        navigate(`${id}`);
    }, [navigate]);

    const renderArticle = useCallback((article: Article) => {
        return (
            <ArticleListItem
                className={ cls.card }
                article={ article }
                view={ view }
                key={ article.id }
                onClick={ onClickArticle }
            />
        );
    }, [onClickArticle, view]);

    if (isLoading) {
        return (
            <ArticleListItemSkeleton />
        );
    }

    return (
        <div className={ classNames(cls.ArticleList, {}, [className, cls[view]]) }>
            {
                articleList.length ? articleList.map(renderArticle) : null
            }
        </div>
    );
});

ArticleList.displayName = 'ArticleList';
