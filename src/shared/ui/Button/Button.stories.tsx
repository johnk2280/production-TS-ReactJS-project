import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEST'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'TEST',
    theme: ButtonTheme.CLEAR
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'TEST',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'TEST',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'TEST',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'TEST',
    theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'TEST',
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'TEST',
    theme: ButtonTheme.BACKGROUND_INVERTED
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.M
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.L
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.XL
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'DISABLED',
    theme: ButtonTheme.OUTLINE,
    disabled: true
};
