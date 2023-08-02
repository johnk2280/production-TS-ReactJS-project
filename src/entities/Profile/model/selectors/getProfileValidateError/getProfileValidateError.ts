import { type StateSchema } from 'app/providers/StoreProvider';
import { type ValidateProfileError } from 'entities/Profile/model/types/profileSchema';

export const getProfileValidateError = (state: StateSchema): ValidateProfileError[] | undefined => state.profile?.validateError;
