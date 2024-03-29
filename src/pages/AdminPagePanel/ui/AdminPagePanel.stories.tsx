import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import AdminPagePanel from './AdminPagePanel';

export default {
    title: 'page/AdminPagePanel',
    component: AdminPagePanel,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AdminPagePanel>;

const Template: ComponentStory<typeof AdminPagePanel> = (args) => <AdminPagePanel { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};
