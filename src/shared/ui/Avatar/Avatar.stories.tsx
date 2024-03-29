import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/forTests/3b2758ad5492a76b578f7ee072e4e894.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar { ...args } />;
export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg
};
