import { type FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, type UserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ForbiddenPage } from 'pages/ForbiddenPage';

interface RequireAuthProps {
    roles?: UserRole[];
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
        return <ForbiddenPage/>;
    }

    return (<>{ children }</>);
};
