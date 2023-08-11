import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.ArticleListItem, {}, [className]) }>

        </div>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
