import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex { ...args } />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>one</div>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>two</div>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>three</div>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>four</div>
        </>
    )
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>one</div>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>two</div>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>three</div>
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <div>four</div>
        </>
    )
};
