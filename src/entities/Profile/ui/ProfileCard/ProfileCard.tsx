import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className = ''
    } = props;

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    console.log(data);
    // TODO: добавить стили
    return (
        <div className={ classNames(cls.ProfileCard, {}, [className]) }>
            <div className={ cls.header }>
                <Text
                    title={ t('Профиль пользователя') }
                    className={ cls.title }
                />
                <Button
                    className={ cls.editBtn }
                    theme={ ButtonTheme.OUTLINE }
                />
                { t('Редактировать') }
            </div>
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
