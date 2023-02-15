import React, { type FC, Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

interface AppProps {
    props?: any
}

const App: FC<AppProps> = (props) => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme ?? ''])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
    )
}

export default App
