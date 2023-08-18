import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

interface AboutPageProps {
    props?: any;
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { t } = useTranslation(['about', 'translation']);

    return (
        <Page>
            { t('О сайте') }
        </Page>
    );
};

export default AboutPage;
