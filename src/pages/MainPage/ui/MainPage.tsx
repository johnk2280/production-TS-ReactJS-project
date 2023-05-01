import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface MainPageProps {
    props?: any;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['mainPage', 'translation']);

    return (
        <div>
            { t('Главная страница') }
            <Counter/>
        </div>
    );
};

export default MainPage;
