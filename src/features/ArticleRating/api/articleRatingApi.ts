import { type Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArgs {
    userId: string;
    articleId: string;
}

interface RateArticleArgs {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArgs>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        rateArticle: build.mutation<void | never, RateArticleArgs>({
            query: ({ userId, articleId, rate, feedback }) => ({
                url: '/article-ratings',
                method: 'POST',
                params: {
                    userId,
                    articleId,
                    rate,
                    feedback
                }
            })
        })
    })
});

export const { useGetArticleRatingQuery } = articleRatingApi;
export const { useRateArticleMutation } = articleRatingApi;
