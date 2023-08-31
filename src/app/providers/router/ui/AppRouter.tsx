import React, { type FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { Loader } from 'shared/ui/Loader/Loader';

interface AppRouterProps {
    props?: any;
}

const AppRouter: FC<AppRouterProps> = (props) => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={ <Loader/> } >
                { route.element }
            </Suspense>
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
