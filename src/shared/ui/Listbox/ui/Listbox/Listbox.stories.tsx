import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Listbox>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Template: ComponentStory<typeof Listbox> = (args) => <Listbox { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};
