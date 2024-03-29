import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select { ...args } />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Выберите значение',
    options: [
        { value: '1', content: 'Первый' },
        { value: '2', content: 'Второй' }
    ]
};
