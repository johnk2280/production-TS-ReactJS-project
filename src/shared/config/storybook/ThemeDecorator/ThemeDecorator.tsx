import { type Story } from '@storybook/react'
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { type ReactNode } from 'react'

export const ThemeDecorator = (theme: Theme): ReactNode => {
    const inner = (StoryComponent: Story): ReactNode => {
        return (
            <ThemeProvider>
                <div className={`app ${theme}`}>
                    <StoryComponent/>
                </div>
            </ThemeProvider>
        )
    }

    return inner
}
