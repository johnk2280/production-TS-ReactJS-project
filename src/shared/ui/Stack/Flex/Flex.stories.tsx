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

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
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
export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
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
export const Gap16 = Template.bind({});
Gap16.args = {
    gap: '16',
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
export const Gap32 = Template.bind({});
Gap32.args = {
    gap: '32',
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

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    direction: 'column',
    gap: '4',
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
export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    direction: 'column',
    gap: '8',
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
export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
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
export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
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
