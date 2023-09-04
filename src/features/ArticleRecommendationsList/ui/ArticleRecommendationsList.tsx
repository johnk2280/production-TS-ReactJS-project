import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo((props: ArticleRecommendationsListProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');

    return (
        <VStack gap={ '8' }>
            <Text
                title={ t('Рекомендуем') }
                size={ TextSize.L }
            />
            <ArticleList
                articleList={ [] }
                isLoading={ false }
                target={ '_blank' }
            />

        </VStack>
    );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
