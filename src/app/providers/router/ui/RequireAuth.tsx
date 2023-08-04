import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    className?: string;
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
    const {
        children
    } = props;

    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (isAuth == null) {
        return <Navigate to={ RoutePath.main } state={ { from: location } } replace/>;
    }

    return (<>{ children }</>);
};
