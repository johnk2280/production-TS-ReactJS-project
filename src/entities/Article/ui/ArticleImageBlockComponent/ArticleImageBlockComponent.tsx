import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { type ArticleImageBlock } from 'entities/Article/model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className = '',
        block
    } = props;

    return (
        <div className={ classNames(cls.ArticleImageBlockComponent, {}, [className]) }>

        </div>
    );
});

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
