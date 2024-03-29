import { classNames } from '@/shared/lib/classNames/classNames';
import React, { type FC, memo } from 'react';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ ButtonTheme.CLEAR }
            className={ classNames('', {}, [className ?? '']) }
            onClick={ toggleTheme }
        >
            { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
        </Button>

    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
