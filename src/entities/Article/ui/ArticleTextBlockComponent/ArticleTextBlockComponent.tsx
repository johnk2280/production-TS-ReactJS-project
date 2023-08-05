import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.ArticleTextBlockComponent, {}, [className]) }>

        </div>
    );
};
