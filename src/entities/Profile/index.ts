export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export type { ProfileType, ProfileSchema } from './model/types/profileSchema';
