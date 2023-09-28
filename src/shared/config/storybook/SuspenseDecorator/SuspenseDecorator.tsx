import { type Story } from '@storybook/react';
import '@/app/styles/index.scss';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';

export const SuspenseDecorator = (StoryComponent: Story): JSX.Element => {
    return (
        <Suspense fallback={ <Loader/> }>
            <StoryComponent/>
        </Suspense>

    );
};
