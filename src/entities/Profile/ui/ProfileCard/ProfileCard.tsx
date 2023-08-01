import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { type ProfileType } from '../../model/types/profileSchema';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ProfileCardProps {
    className?: string;
    data?: ProfileType;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (val?: string) => void;
    onChangeLastname?: (val?: string) => void;
    onChangeAge?: (val?: string) => void;
    onChangeCurrency?: () => void;
    onChangeCountry?: () => void;
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
            <div className={ classNames(cls.ProfileCard, {}, [className, cls.loading]) }>
                <Loader/>
            </div>
        );
    }

    if (error) {
        return (
            <div className={ classNames(cls.ProfileCard, {}, [className, cls.error]) }>
                <Text
                    theme={ TextTheme.ERROR }
                    title={ t('Произошла ошибка при загрузке профиля') }
                    text={ t('Попробуйте обновить страницу') }
                    align={ TextAlign.CENTER }
                />
            </div>
        );
    }

    return (
        <div className={ classNames(cls.ProfileCard, {}, [className]) }>
            {
                data?.avatar && <Avatar src={ data?.avatar } alt={ '' }/>
            }
            <div className={ cls.data }>
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
                <Input
                    value={ data?.firstname }
                    placeholder={ t('Валюта') }
                    className={ cls.input }
                    onChange={ onChangeFirstname }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('Страна') }
                    className={ cls.input }
                    onChange={ onChangeLastname }
                    readonly={ readonly }
                />

            </div>
        </div>
    );
};
