import React, { type FC, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface AppRouterProps {
    props?: any;
}

const AppRouter: FC<AppRouterProps> = (props) => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            return !(route.authOnly && (isAuth == null));
        });
    }, [isAuth]);

    return (
        <Routes>
            { routes.map(({ path, element }) => (
                <Route
                    key={ path }
                    element={
                        <div className="page-wrapper">
                            { element }
                        </div>
                    }
                    path={ path }
                />
            )) }
        </Routes>
    );
};

export default memo(AppRouter);
