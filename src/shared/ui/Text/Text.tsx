import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { type FC, memo } from 'react';
import { type TFunction } from 'react-i18next';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string | TFunction;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    };

    return (
        <div className={ classNames(cls.Text, mods, [className ?? '']) }>
            { (title != null) && <p className={ cls.title }>{ title }</p> }
            { (text != null) && <p className={ cls.text }>{ text }</p> }
        </div>
    );
});

Text.displayName = 'Text';
