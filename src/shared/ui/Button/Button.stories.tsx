import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'TEST'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'TEST',
    theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'TEST',
    theme: ThemeButton.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'TEST',
    theme: ThemeButton.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
