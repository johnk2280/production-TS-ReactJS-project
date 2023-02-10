import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {

    const {t} = useTranslation(['mainPage', 'translation']);

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;