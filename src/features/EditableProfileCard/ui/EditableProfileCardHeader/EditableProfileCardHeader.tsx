import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getUserAuthData } from '@/entities/User';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo((props: EditableProfileCardHeaderProps) => {
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
                                    data-testid={ 'EditableProfileCardHeader.EditButton' }
                                >
                                    { t('Редактировать') }
                                </Button>
                            )
                            : (
                                <HStack gap={ '8' } max={ true }>
                                    <Button
                                        theme={ ButtonTheme.OUTLINE_RED }
                                        onClick={ onCancelEdit }
                                        data-testid={ 'EditableProfileCardHeader.CancelButton' }
                                    >
                                        { t('Отменить') }
                                    </Button>
                                    <Button
                                        theme={ ButtonTheme.OUTLINE }
                                        onClick={ onSave }
                                        data-testid={ 'EditableProfileCardHeader.SaveButton' }
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
});

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';
