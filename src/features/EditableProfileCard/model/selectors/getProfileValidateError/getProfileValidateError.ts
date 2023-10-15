import { type StateSchema } from '@/app/providers/StoreProvider';
import { type ValidateProfileError } from '../../consts/consts';

export const getProfileValidateError = (state: StateSchema): ValidateProfileError[] | undefined => state.profile?.validateError;
