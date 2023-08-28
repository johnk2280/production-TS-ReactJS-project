import { type StateSchema } from 'app/providers/StoreProvider';
import { type ProfileType } from '../../types/profileSchema';

export const getProfileData = (state: StateSchema): ProfileType | undefined => state.profile?.data;
