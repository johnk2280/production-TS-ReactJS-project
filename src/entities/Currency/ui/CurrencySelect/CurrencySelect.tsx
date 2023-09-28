import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type ListboxItem, Listbox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options: ListboxItem[] = [
    { value: Currency.RUB, content: Currency.RUB, disabled: false },
    { value: Currency.USD, content: Currency.USD, disabled: false },
    { value: Currency.EUR, content: Currency.EUR, disabled: false }
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
        <Listbox
            className={ classNames('', {}, [className]) }
            onChange={ onChangeHandler }
            items={ options }
            value={ value }
            defaultValue={ t('Укажите валюту') }
            readonly={ readonly }
            label={ t('Валюта') }
            direction={ 'top right' }
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
