import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

interface AppRouterProps {
    props?: any
}

const AppRouter: FC<AppRouterProps> = (props) => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    element={
                        <div className="page-wrapper">
                            {element}
                        </div>
                    }
                    path={path}
                />
            ))}
        </Routes>
    )
}

export default AppRouter
