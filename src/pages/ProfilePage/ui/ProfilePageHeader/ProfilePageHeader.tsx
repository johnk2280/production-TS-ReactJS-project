import { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileReadOnly } from 'features/EditableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from 'features/EditableProfileCard/model/selectors/getProfileData/getProfileData';
import { profileActions } from 'features/EditableProfileCard/model/slice/profileSlice';
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        className = ''
    } = props;

    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadOnly);
    const profile = useSelector(getProfileData);
    const userData = useSelector(getUserAuthData);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            justify={ 'between' }
            max={ true }
            className={ classNames('', {}, [className]) }
        >
            <Text
                title={ t('Профиль пользователя') }
                align={ TextAlign.CENTER }
            />
            {
                profile?.id === userData?.id
                    ? (
                        readonly
                            ? (
                                <Button
                                    theme={ ButtonTheme.OUTLINE }
                                    onClick={ onEdit }
                                >
                                    { t('Редактировать') }
                                </Button>
                            )
                            : (
                                <HStack gap={ '8' } max={ true }>
                                    <Button
                                        theme={ ButtonTheme.OUTLINE_RED }
                                        onClick={ onCancelEdit }
                                    >
                                        { t('Отменить') }
                                    </Button>
                                    <Button
                                        theme={ ButtonTheme.OUTLINE }
                                        onClick={ onSave }
                                    >
                                        { t('Сохранить') }
                                    </Button>
                                </HStack>

                            )
                    )
                    : null
            }

        </HStack>
    );
};
