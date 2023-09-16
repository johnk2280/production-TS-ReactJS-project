import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

interface MainPageProps {
    props?: any;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['main', 'translation']);

    return (
        <Page>
            <VStack gap={ '8' }>
                { t('Главная страница') }
            </VStack>
        </Page>
    );
};

export default MainPage;
