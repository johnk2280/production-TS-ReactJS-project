import { RatingCard } from '@/entities/Rating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleRatingProps {
    className?: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo((props: ArticleRatingProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation(['main', 'translation']);

    return (
        <RatingCard
            className={ classNames('', {}, [className]) }
            title={ t('Как Вам статья?') }
            feedbackTitle={ t('Оставить отзыв о статье') }
            hasFeedBack={ true }
        />
    );
});

ArticleRating.displayName = 'ArticleRating';

export default ArticleRating;
