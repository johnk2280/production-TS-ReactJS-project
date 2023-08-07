import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR }
];

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {
        className = '',
        value,
        onChange,
        readonly
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={ classNames('', {}, [className]) }
            label={ t('Валюта') }
            onChange={ onChangeHandler }
            options={ options }
            value={ value }
            readonly={ readonly }
        />

    );
});

CurrencySelect.displayName = 'CurrencySelect';
