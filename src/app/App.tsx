import React, { type FC, Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

interface AppProps {
    props?: any;
}

const App: FC<AppProps> = (props) => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={ classNames('app', {}, []) }>
            <Suspense fallback="">
                <Navbar/>
                { /* <button onClick={ () => { */ }
                { /*    setIsOpen(true); */ }
                { /*    // eslint-disable-next-line i18next/no-literal-string */ }
                { /* } }>toggle */ }
                { /* </button> */ }
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
    );
};

export default App;
