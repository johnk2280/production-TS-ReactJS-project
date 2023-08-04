import React, { type FC, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

interface AppRouterProps {
    props?: any;
}

const AppRouter: FC<AppRouterProps> = (props) => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                { route.element }
            </div>
        );

        return (
            <Route
                key={ route.path }
                element={ route.authOnly ? <RequireAuth>{ element }</RequireAuth> : element }
                path={ route.path }
            />
        );
    }, []);
    return (

        <Routes>
            { Object.values(routeConfig).map(renderWithWrapper) }
        </Routes>
    );
};

export default memo(AppRouter);
