import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newThem = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newThem);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThem)
    }

    return {
        theme,
        toggleTheme,
    }
}