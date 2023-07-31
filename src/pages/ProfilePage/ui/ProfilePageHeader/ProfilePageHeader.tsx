import { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { useSelector } from 'react-redux';
import { getReadOnly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        className = ''
    } = props;

    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const readonly = useSelector(getReadOnly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={ classNames(cls.ProfilePageHeader, {}, [className]) }>
            <Text
                title={ t('Профиль пользователя') }
                className={ cls.title }
                align={ TextAlign.CENTER }
            />
            {
                readonly
                    ? (
                        <Button
                            className={ cls.editBtn }
                            theme={ ButtonTheme.OUTLINE }
                            onClick={ onEdit }
                        >
                            { t('Редактировать') }
                        </Button>
                    )
                    : (
                        <Button
                            className={ cls.editBtn }
                            theme={ ButtonTheme.OUTLINE }
                            onClick={ onCancelEdit }
                        >
                            { t('Отменить') }
                        </Button>
                    )
            }

        </div>
    );
};
