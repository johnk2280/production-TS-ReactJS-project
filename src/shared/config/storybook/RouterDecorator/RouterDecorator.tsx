import { type Story } from '@storybook/react';
import 'app/styles/index.scss';
import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (ComponentStory: Story): ReactNode => {
    return (
        <BrowserRouter>
            <ComponentStory/>
        </BrowserRouter>
    );
};
