import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { type Story } from '@storybook/react';
import { Suspense } from 'react';
import i18n from 'shared/config/i18n/i18n';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={ i18n }>
        <Suspense fallback="">
            <StoryComponent/>
        </Suspense>
    </I18nextProvider>
);
