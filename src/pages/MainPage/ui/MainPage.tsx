import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

interface MainPageProps {
    props?: any;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['main', 'translation']);

    return (
        <Page>
            { t('Главная страница') }
        </Page>
    );
};

export default MainPage;
