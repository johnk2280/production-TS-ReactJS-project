import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema): boolean => {
    return state.articleDetailsPage?.recommendations.isLoading ?? false;
};
export const getArticleRecommendationsError = (state: StateSchema): string => {
    return state.articleDetailsPage?.recommendations.error ?? '';
};
