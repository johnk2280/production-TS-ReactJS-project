import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Text } from './Text';

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

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title'
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text'
};
