import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }
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
        <Select
            className={ classNames('', {}, [className]) }
            label={ t('Страна') }
            onChange={ onChangeHandler }
            options={ options }
            value={ value }
            readonly={ readonly }
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
