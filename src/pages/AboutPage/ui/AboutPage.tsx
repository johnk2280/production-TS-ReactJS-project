import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    props?: any;
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { t } = useTranslation(['about', 'translation']);

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
