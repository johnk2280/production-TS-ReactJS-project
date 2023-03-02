import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import { type ReactNode } from 'react'

export const ThemeDecorator = (theme: Theme): ReactNode => {
    const inner = (StoryComponent: Story): ReactNode => {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        )
    }

    return inner
}
