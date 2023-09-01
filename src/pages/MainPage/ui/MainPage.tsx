import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { Listbox } from 'shared/ui/Listbox';

interface MainPageProps {
    props?: any;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['main', 'translation']);

    return (
        <Page>
            { t('Главная страница') }

            <Listbox/>
        </Page>
    );
};

export default MainPage;
