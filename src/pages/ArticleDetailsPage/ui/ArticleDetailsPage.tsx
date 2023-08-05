import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.ArticleDetailsPage, {}, [className]) }>

        </div>
    );
};

export default memo(ArticleDetailsPage);
