import { type StateSchema } from 'app/providers/StoreProvider';

import { ValidateProfileError } from 'features/EditableProfileCard';

export const getProfileError = (state: StateSchema): string => state.profile?.error ?? '';
