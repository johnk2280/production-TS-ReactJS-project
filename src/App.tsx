import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./pages/classNames";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;