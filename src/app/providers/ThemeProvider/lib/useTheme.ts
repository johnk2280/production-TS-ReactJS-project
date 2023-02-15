import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
    toggleTheme: () => void
    theme?: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newThem = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        if (setTheme != null) setTheme(newThem)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThem)
    }

    return {
        theme,
        toggleTheme
    }
}
