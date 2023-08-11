import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.ArticleList, {}, [className]) }>

        </div>
    );
});

ArticleList.displayName = 'ArticleList';
