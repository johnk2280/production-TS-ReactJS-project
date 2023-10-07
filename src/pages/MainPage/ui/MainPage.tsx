import { RatingCard } from '@/entities/Rating';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    props?: any;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['main', 'translation']);

    return (
        <Page>
            { /* <VStack gap={ '32' } max={ true } align={ 'center' }> */ }
            { /*    */ }
            { /* </VStack> */ }

            { t('Главная страница') }

            <RatingCard
                title={ t('Как Вам статья?') }
                feedbackTitle={ t('Оставить отзыв о статье') }
                hasFeedBack={ true }
            />
        </Page>
    );
};

export default MainPage;
