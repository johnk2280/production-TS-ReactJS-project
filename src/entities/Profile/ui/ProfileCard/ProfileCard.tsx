import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { type ProfileType } from '../../model/types/profileSchema';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string;
    data?: ProfileType;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className = '',
        data,
        isLoading,
        error
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
            <div className={ cls.data }>
                <Input
                    value={ data?.firstname }
                    placeholder={ t('Имя') }
                    className={ cls.input }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('Фамилия') }
                    className={ cls.input }
                />

            </div>
        </div>
    );
};
