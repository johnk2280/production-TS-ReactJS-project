import { rtkApi } from 'shared/api/rtkApi';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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
