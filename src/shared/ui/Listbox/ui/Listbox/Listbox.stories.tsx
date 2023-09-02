import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={ { padding: 200 } }><Story/></div>
    ]
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox { ...args } />;

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        {
            value: 'first',
            content: 'firstfirstfirstfirstfirstfirst',
            disabled: false
        },
        {
            value: 'second',
            content: 'secondsecondsecondsecondsecondsecond',
            disabled: false
        },
        {
            value: 'third',
            content: 'thirdthirdthirdthirdthirdthird',
            disabled: false
        }
    ],
    direction: 'top right',
    defaultValue: 'Push me'
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        {
            value: 'first',
            content: 'firstfirstfirstfirstfirstfirst',
            disabled: false
        },
        {
            value: 'second',
            content: 'secondsecondsecondsecondsecondsecond',
            disabled: false
        },
        {
            value: 'third',
            content: 'thirdthirdthirdthirdthirdthird',
            disabled: false
        }
    ],
    direction: 'top left',
    defaultValue: 'Push me'
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        {
            value: 'first',
            content: 'firstfirstfirstfirstfirstfirst',
            disabled: false
        },
        {
            value: 'second',
            content: 'secondsecondsecondsecondsecondsecond',
            disabled: false
        },
        {
            value: 'third',
            content: 'thirdthirdthirdthirdthirdthird',
            disabled: false
        }
    ],
    direction: 'bottom right',
    defaultValue: 'Push me'
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        {
            value: 'first',
            content: 'firstfirstfirstfirstfirstfirst',
            disabled: false
        },
        {
            value: 'second',
            content: 'secondsecondsecondsecondsecondsecond',
            disabled: false
        },
        {
            value: 'third',
            content: 'thirdthirdthirdthirdthirdthird',
            disabled: false
        }
    ],
    direction: 'bottom left',
    defaultValue: 'Push me'
};
