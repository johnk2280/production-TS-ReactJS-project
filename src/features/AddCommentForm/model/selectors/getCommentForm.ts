import { type StateSchema } from '@/app/providers/StoreProvider';

export const getCommentFormText = (state: StateSchema): string => state.addCommentForm?.text ?? '';
export const getCommentFormError = (state: StateSchema): string | undefined => state.addCommentForm?.error;
export const getCommentFormIsLoading = (state: StateSchema): boolean | undefined => state.addCommentForm?.isLoading;
