export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors/roleSelectors';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    userReducer,
    userActions
} from './model/slice/userSlice';

export type {
    UserSchema,
    User
} from './model/types/userSchema';

export { UserRole } from './model/consts/consts';
