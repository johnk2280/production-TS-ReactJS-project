import { type FC, memo, type ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

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
            <div className={ classNames(cls.ArticleList, {}, [className, cls[view]]) }>
                { getSkeletons(view) }
            </div>
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
