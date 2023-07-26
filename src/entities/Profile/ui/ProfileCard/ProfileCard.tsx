import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

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

    return (
        <div className={ classNames(cls.ProfileCard, {}, [className]) }>
            <Text title={ t('Профиль пользователя') }/>
            <Button theme={ ButtonTheme.OUTLINE }/>
            { t('Редактировать') }

        </div>
    );
};
