import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema): boolean | undefined => {
    return state.articleDetailsPage?.comments.isLoading;
};
export const getArticleCommentsError = (state: StateSchema): string | undefined => {
    return state.articleDetailsPage?.comments.error;
};
