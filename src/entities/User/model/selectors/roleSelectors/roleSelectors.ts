import { type StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from 'entities/User';
import { createSelector } from '@reduxjs/toolkit';

export const getUserRoles = (state: StateSchema): UserRole[] | undefined => state.user.authData?.role;

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
