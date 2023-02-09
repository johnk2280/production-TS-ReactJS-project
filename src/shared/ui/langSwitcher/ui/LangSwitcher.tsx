import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {className} = props;


    const {t, i18n} = useTranslation(['translation']);
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};