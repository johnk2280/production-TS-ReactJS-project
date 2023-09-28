import { type FC, useMemo, type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    roles?: UserRole[];
    children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
    const {
        children,
        roles
    } = props;

    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles: boolean = useMemo(() => {
        if (!roles?.length) {
            return true;
        }
        return roles.some(role => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!isAuth) {
        return <Navigate to={ RoutePath.main } state={ { from: location } } replace/>;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={ RoutePath.forbidden } state={ { from: location } } replace/>;
    }

    return (<>{ children }</>);
};
