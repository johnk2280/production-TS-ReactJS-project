import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema): boolean => {
    return state.articleDetailsPage?.comments.isLoading ?? false;
};
export const getArticleCommentsError = (state: StateSchema): string | undefined => {
    return state.articleDetailsPage?.comments.error;
};
