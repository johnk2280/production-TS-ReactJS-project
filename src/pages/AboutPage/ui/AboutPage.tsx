import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation(['about', 'translation']);

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;