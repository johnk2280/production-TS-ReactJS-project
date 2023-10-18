import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { type AppRoutesProps } from '@/shared/types/router';
import React, { type FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { Loader } from '@/shared/ui/Loader/Loader';
import { UserRole } from '@/entities/User';

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
                element={ route.authOnly
                    ? <RequireAuth roles={ [UserRole.ADMIN, UserRole.MANAGER] }>{ element }</RequireAuth>
                    : element }
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
