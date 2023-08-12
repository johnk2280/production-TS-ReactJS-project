import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

export default {
    title: 'shared/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => <ArticleListItemSkeleton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};
