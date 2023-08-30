import { type FC } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { type ProfileType, type ValidateProfileError } from '../../model/types/profileSchema';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { type Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { type Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

interface ProfileCardProps {
    className?: string;
    data?: ProfileType;
    isLoading?: boolean;
    error?: string | ValidateProfileError[];
    readonly?: boolean;
    onChangeFirstname?: (val?: string) => void;
    onChangeLastname?: (val?: string) => void;
    onChangeAge?: (val?: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    onChangeCity?: () => void;
    onChangeUsername?: (val?: string) => void;
    onChangeAvatar?: (val?: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className = '',
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                max={ true }
                justify={ 'center' }
                className={ classNames(cls.ProfileCard, {}, [className, cls.loading]) }
            >
                <Loader/>
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                max={ true }
                justify={ 'center' }
                className={ classNames(cls.ProfileCard, {}, [className, cls.error]) }
            >
                <Text
                    theme={ TextTheme.ERROR }
                    title={ t('Произошла ошибка при загрузке профиля') }
                    text={ t('Попробуйте обновить страницу') }
                    align={ TextAlign.CENTER }
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    };

    return (
        <VStack
            gap={ '16' }
            max={ true }
            className={ classNames(cls.ProfileCard, mods, [className]) }
        >
            <HStack
                align={ 'center' }
                max={ true }
            >
                {
                    data?.avatar && <Avatar src={ data?.avatar } alt={ '' }/>
                }
            </HStack>
            <Input
                value={ data?.firstname }
                placeholder={ t('Имя') }
                className={ cls.input }
                onChange={ onChangeFirstname }
                readonly={ readonly }
            />
            <Input
                value={ data?.lastname }
                placeholder={ t('Фамилия') }
                className={ cls.input }
                onChange={ onChangeLastname }
                readonly={ readonly }
            />
            <Input
                value={ data?.age }
                placeholder={ t('Возраст') }
                className={ cls.input }
                onChange={ onChangeAge }
                readonly={ readonly }
            />
            <Input
                value={ data?.city }
                placeholder={ t('Город') }
                className={ cls.input }
                onChange={ onChangeCity }
                readonly={ readonly }
            />
            <Input
                value={ data?.username }
                placeholder={ t('Имя пользователя') }
                className={ cls.input }
                onChange={ onChangeUsername }
                readonly={ readonly }
            />
            <Input
                value={ data?.avatar }
                placeholder={ t('Аватар') }
                className={ cls.input }
                onChange={ onChangeAvatar }
                readonly={ readonly }
            />
            <CurrencySelect
                value={ data?.currency }
                onChange={ onChangeCurrency }
                readonly={ readonly }
                className={ cls.input }
            />
            <CountrySelect
                value={ data?.country }
                className={ cls.input }
                onChange={ onChangeCountry }
                readonly={ readonly }
            />

        </VStack>
    );
};
