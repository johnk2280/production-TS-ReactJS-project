import { type StateSchema } from 'app/providers/StoreProvider';

export const getReadOnly = (state: StateSchema): boolean | undefined => state.profile?.readonly;
