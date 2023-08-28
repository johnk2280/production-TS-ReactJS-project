import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from '../ProfilePage/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Avatar from 'shared/assets/forTests/3b2758ad5492a76b578f7ee072e4e894.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage { ...args } />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Evgen',
            lastname: 'Kungurov',
            age: 42,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Chelyabinsk',
            username: 'admin',
            avatar: Avatar
        }
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            firstname: 'Evgen',
            lastname: 'Kungurov',
            age: 42,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Chelyabinsk',
            username: 'admin',
            avatar: Avatar
        }
    }
})];
