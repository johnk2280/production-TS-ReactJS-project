import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema): boolean => state.articleDetailsComments?.isLoading ?? false;
export const getArticleCommentsError = (state: StateSchema): string | undefined => state.articleDetailsComments?.error;
