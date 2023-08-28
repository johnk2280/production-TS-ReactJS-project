import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
    const {
        className,
        short = false
    } = props;

    const { t, i18n } = useTranslation(['translation']);
    const toggle = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={ classNames(cls.LangSwitcher, {}, [className ?? '']) }
            theme={ ButtonTheme.CLEAR }
            onClick={ toggle }
        >
            { t(short ? 'Короткий язык' : 'Язык') }
        </Button>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
