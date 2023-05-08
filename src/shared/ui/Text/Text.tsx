import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { type FC } from 'react';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        title,
        text
    } = props;

    return (
        <div className={ classNames(cls.Text, {}, [className ?? '']) }>
            { (title != null) && <p className={ cls.title }>{ title }</p> }
            { (text != null) && <p className={ cls.text }>{ text }</p> }
        </div>
    );
};
