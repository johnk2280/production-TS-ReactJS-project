import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { rtkApi } from 'shared/api/rtkApi';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleRecommendationsListProps {
    className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query({
            query: (limit) => ({
                url: RoutePath.articles,
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export const { useGetArticleRecommendationsQuery } = recommendationsApi;

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
