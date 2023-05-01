import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { type FC, type InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (val: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames(cls.Input)}
            {...otherProps}
            onChange={onChangeHandler}
        >

        </input>
    );
};
