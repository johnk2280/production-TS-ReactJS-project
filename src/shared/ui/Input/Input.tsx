import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { type FC, type InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (val: string) => void;
    placeholder?: string;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        onChange,
        value,
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    return (
        <div className={ classNames(cls.Input, {}, [className ?? '']) }>
            <div className={ cls.placeholder }>
                { placeholder && `${placeholder + ' >'}` }
            </div>
            <input
                value={ value }
                onChange={ onChangeHandler }
                { ...otherProps }
            />
        </div>

    );
};
