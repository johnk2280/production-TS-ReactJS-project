import { type StateSchema } from 'app/providers/StoreProvider';

export const addCommentFormText = (state: StateSchema): string | undefined => state.addCommentForm?.text;
export const addCommentFormError = (state: StateSchema): string | undefined => state.addCommentForm?.error;
export const addCommentFormIsLoading = (state: StateSchema): boolean | undefined => state.addCommentForm?.isLoading;
