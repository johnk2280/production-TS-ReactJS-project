import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args): JSX.Element => <Text { ...args }/>;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.S
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.M
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.L
};
