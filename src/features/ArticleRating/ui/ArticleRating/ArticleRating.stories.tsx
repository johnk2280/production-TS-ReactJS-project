import { type Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa'
};

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock]
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating { ...args } />;

export const NormalWithRate = Template.bind({});
NormalWithRate.args = {
    articleId: '1'
};

NormalWithRate.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        }
    })
];
NormalWithRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1'`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    rate: 4,
                    feedback: 'Хорошая статья',
                    userId: '1',
                    articleId: '1'
                }
            ]
        }
    ]
};

export const NormalWithoutRate = Template.bind({});
NormalWithoutRate.args = {
    articleId: '1'
};
NormalWithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        }
    })
];
NormalWithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1'`,
            method: 'GET',
            status: 200,
            response: []
        }
    ]
};
