import { type StateSchema } from '@/app/providers/StoreProvider';

export const getProfileReadOnly = (state: StateSchema): boolean | undefined => state.profile?.readonly;
