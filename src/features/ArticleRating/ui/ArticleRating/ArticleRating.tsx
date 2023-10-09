import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
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

    const { data: articleRating, isLoading } = useGetArticleRatingQuery({
        articleId,
        userId: userData?.id ?? ''
    });
    const [rateArticleMutation] = useRateArticleMutation();

    const handleRateArticleMutation = useCallback((starCount: number, feedback?: string) => {
        rateArticleMutation({
            articleId,
            userId: userData?.id ?? '',
            rate: starCount,
            feedback
        })
            .catch(e => {
                console.log(e);
            });
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starCount: number, feedback?: string) => {
        handleRateArticleMutation(starCount, feedback);
    }, [handleRateArticleMutation]);

    const onCancel = useCallback((starCount: number) => {
        handleRateArticleMutation(starCount);
    }, [handleRateArticleMutation]);

    if (isLoading) {
        return (
            <Skeleton width={ '100%' } height={ 120 }/>
        );
    }

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
