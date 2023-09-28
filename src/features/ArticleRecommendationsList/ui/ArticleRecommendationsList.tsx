import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo((props: ArticleRecommendationsListProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');
    const {
        isLoading,
        data: articles,
        error
    } = useGetArticleRecommendationsQuery(3);

    if (isLoading ?? error ?? !articles) {
        // TODO: просто заглушка - в случае загрузки отобразить спиннер, в случае ошибки - сообщение
        return null;
    }

    return (
        <VStack
            gap={ '8' }
            className={ classNames('', {}, [className ?? '']) }
        >
            <Text
                title={ t('Рекомендуем') }
                size={ TextSize.L }
            />
            <ArticleList
                articleList={ articles }
                target={ '_blank' }
            />

        </VStack>
    );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
