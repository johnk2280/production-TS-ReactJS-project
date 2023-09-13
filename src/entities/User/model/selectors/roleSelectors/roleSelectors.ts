import { type StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../../types/userSchema';
import { createSelector } from '@reduxjs/toolkit';

const getUserRoles = (state: StateSchema): UserRole[] | undefined => state.user.authData?.role;

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => {
        return roles?.includes(UserRole.ADMIN);
    }
);

export const isUserManager = createSelector(
    getUserRoles,
    (roles) => {
        return roles?.includes(UserRole.MANAGER);
    }
);
