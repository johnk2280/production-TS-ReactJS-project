import { type StateSchema } from 'app/providers/StoreProvider';
import { type ValidateProfileError } from '../../types/profileSchema';

export const getProfileError = (state: StateSchema): string | ValidateProfileError[] => state.profile?.error ?? '';
