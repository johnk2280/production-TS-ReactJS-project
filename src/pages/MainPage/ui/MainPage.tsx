import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { Listbox } from 'shared/ui/Listbox';
import { VStack } from 'shared/ui/Stack';

interface MainPageProps {
    props?: any;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['main', 'translation']);

    return (
        <Page>
            <VStack gap={ '8' }>
                { t('Главная страница') }

                <Listbox
                    defaultValue={ t('Выберите значение') }
                    onChange={ (value: string) => {
                        console.log(value);
                    } }
                    items={ [
                        { value: '1', content: '1', disabled: false },
                        { value: '2', content: '2', disabled: false },
                        { value: '3', content: '3', disabled: true },
                        { value: '4', content: '4', disabled: false }
                    ] }
                />
            </VStack>

        </Page>
    );
};

export default MainPage;
