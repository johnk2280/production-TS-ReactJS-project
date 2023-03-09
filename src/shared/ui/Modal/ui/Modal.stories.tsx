import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fuga fugiat id qui sunt vero ' +
        'vitae, voluptatibus. Architecto cupiditate distinctio, dolor ducimus error ex excepturi expedita' +
        'facilis id minima molestiae natus necessitatibus, nihil omnis perferendis provident quas quos' +
        'reprehenderit sunt voluptatem? Accusamus adipisci, alias aperiam, beatae dolorum earum est eveniet',
    isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fuga fugiat id qui sunt vero ' +
        'vitae, voluptatibus. Architecto cupiditate distinctio, dolor ducimus error ex excepturi expedita' +
        'facilis id minima molestiae natus necessitatibus, nihil omnis perferendis provident quas quos' +
        'reprehenderit sunt voluptatem? Accusamus adipisci, alias aperiam, beatae dolorum earum est eveniet',
    isOpen: true
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
