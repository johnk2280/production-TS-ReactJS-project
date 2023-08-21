import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema): boolean => {
    return state.articleDetailsRecommendations?.isLoading ?? false;
};
export const getArticleRecommendationsError = (state: StateSchema): string => {
    return state.articleDetailsRecommendations?.error ?? '';
};
