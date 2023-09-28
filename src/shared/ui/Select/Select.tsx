import React, { type ChangeEvent, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { HStack } from '../Stack/HStack/HStack';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: Array<SelectOption<T>>;
    value?: T;
    onChange?: (val: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>): JSX.Element => {
    const {
        className = '',
        label,
        options,
        value,
        onChange,
        readonly
    } = props;

    const optionList = useMemo(() => {
        return options?.map(opt => (
            <option
                className={ cls.option }
                value={ opt.value }
                key={ opt.value }
            >
                { opt.content }
            </option>
        ));
    }, [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    return (
        <HStack
            gap={ '16' }
            max={ true }
            justify={ 'start' }
            className={ classNames(cls.Wrapper, {}, [className]) }
        >
            {
                label && (
                    <span className={ cls.label }>
                        { label }
                    </span>
                )
            }
            <select
                className={ cls.select }
                value={ value }
                onChange={ onChangeHandler }
                disabled={ readonly }
            >
                { optionList }
            </select>
        </HStack>
    );
};

Select.displayName = 'Select';
