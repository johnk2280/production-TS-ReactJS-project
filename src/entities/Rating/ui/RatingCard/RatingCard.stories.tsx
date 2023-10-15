import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};
