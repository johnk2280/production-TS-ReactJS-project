import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { type FC, type InputHTMLAttributes, memo } from 'react';
import { HStack } from '../Stack/HStack/HStack';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (val: string) => void;
    placeholder?: string;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: true
    };

    return (
        <HStack
            max={ true }
            justify={ 'between' }
            gap={ '16' }
            className={ classNames('', mods, [className ?? '']) }
        >
            <div className={ cls.placeholder }>
                { placeholder && placeholder }
            </div>
            <input
                value={ value }
                onChange={ onChangeHandler }
                readOnly={ readonly }
                { ...otherProps }
            />
        </HStack>

    );
});

Input.displayName = 'Input';
