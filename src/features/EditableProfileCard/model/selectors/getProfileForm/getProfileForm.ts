import { type StateSchema } from '@/app/providers/StoreProvider';
import { type ProfileType } from '@/entities/Profile';

export const getProfileForm = (state: StateSchema): ProfileType | undefined => state.profile?.form;
