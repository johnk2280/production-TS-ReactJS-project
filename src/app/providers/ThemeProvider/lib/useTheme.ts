import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
    toggleTheme: () => void;
    theme?: Theme;
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        let newTheme: Theme;
        if (theme === Theme.DARK) {
            newTheme = Theme.LIGHT;
        } else if (theme === Theme.LIGHT) {
            newTheme = Theme.DARK;
        } else {
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme ?? Theme.LIGHT,
        toggleTheme
    };
}
