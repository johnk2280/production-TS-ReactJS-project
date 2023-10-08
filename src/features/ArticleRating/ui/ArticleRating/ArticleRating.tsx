import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetArticleRatingQuery } from '../../api/articleRatingApi';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo((props: ArticleRatingProps) => {
    const {
        className = '',
        articleId
    } = props;
    const { t } = useTranslation(['main', 'translation']);
    const userData = useSelector(getUserAuthData);

    const { data: articleRating } = useGetArticleRatingQuery({
        articleId,
        userId: userData?.id ?? ''
    });

    const onAccept = useCallback(() => {}, []);
    const onCancel = useCallback(() => {}, []);

    const rating = articleRating?.[0];

    return (
        <RatingCard
            className={ classNames('', {}, [className]) }
            title={ t('Как Вам статья?') }
            feedbackTitle={ t('Оставить отзыв о статье') }
            hasFeedBack={ true }
            rate={ rating?.rate }
            onAccept={ onAccept }
            onCancel={ onCancel }
        />
    );
});

ArticleRating.displayName = 'ArticleRating';

export default ArticleRating;
