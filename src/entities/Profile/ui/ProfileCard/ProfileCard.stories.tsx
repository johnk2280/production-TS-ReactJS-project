import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import Avatar from '@/shared/assets/forTests/3b2758ad5492a76b578f7ee072e4e894.jpg';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstname: 'Evgen',
        lastname: 'Kungurov',
        age: 42,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Chelyabinsk',
        username: 'admin',
        avatar: Avatar
    }
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'assdfg'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
