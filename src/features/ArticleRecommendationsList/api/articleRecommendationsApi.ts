import { rtkApi } from 'shared/api/rtkApi';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { type Article } from 'entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
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
