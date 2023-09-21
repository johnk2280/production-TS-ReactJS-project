import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>OPEN</Button>,
    items: [
        {
            value: '1',
            content: 'One',
            disabled: false,
            onClick: () => {
                console.log('One');
            }
        },
        {
            value: '2',
            content: 'Two',
            disabled: true,
            onClick: () => {
                console.log('Two');
            }
        },
        {
            value: '3',
            content: 'Three',
            disabled: false,
            onClick: () => {
                console.log('Three');
            }
        }
    ]
};
