import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../model/types/country';
import { Listbox, type ListboxItem } from 'shared/ui/Listbox';
import { HStack } from 'shared/ui/Stack';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options: ListboxItem[] = [
    { value: Country.Armenia, content: Country.Armenia, disabled: false },
    { value: Country.Belarus, content: Country.Belarus, disabled: false },
    { value: Country.Kazakhstan, content: Country.Kazakhstan, disabled: false },
    { value: Country.Russia, content: Country.Russia, disabled: false },
    { value: Country.Ukraine, content: Country.Ukraine, disabled: false }
];

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {
        className = '',
        value,
        readonly,
        onChange
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Listbox
            className={ classNames('', {}, [className]) }
            onChange={ onChangeHandler }
            items={ options }
            value={ value }
            readonly={ readonly }
            defaultValue={ t('Укажите страну') }
            direction={ 'top' }
            label={ t('Страна') }
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
