import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        className = ''
    } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={ classNames(cls.ProfilePageHeader, {}, [className]) }>
            <Text
                title={ t('Профиль пользователя') }
                className={ cls.title }
                align={ TextAlign.CENTER }
            />
            <Button
                className={ cls.editBtn }
                theme={ ButtonTheme.OUTLINE }
            >
                { t('Редактировать') }
            </Button>
        </div>
    );
};
