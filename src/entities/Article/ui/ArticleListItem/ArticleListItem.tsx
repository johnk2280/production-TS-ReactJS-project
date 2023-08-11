import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { type Article, type ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
    const {
        className = '',
        view,
        article
    } = props;

    return (
        <div className={ classNames(cls.ArticleListItem, {}, [className]) }>
            { article.title }
        </div>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
