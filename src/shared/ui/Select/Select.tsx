import { type ChangeEvent, type FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (val: string) => void;
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
    const {
        className = '',
        label,
        options,
        value,
        onChange
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
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={ classNames(cls.Wrapper, {}, [className]) }>
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
            >
                { optionList }
            </select>
        </div>
    );
});

Select.displayName = 'Select';
