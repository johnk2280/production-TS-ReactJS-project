import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRating.module.scss';

interface ArticleRatingProps {
    className?: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo((props: ArticleRatingProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.ArticleRating, {}, [className]) }>

        </div>
    );
});

ArticleRating.displayName = 'ArticleRating';

export default ArticleRating;
