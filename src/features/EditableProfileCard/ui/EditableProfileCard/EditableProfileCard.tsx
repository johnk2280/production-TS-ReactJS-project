import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateError } from '../../model/selectors/getProfileValidateError/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducerList = {
    profile: profileReducer
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className = '',
        id
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateError);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия пользователя обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны')
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ firstname: val }));
    }, [dispatch]);
    const onChangeLastname = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ lastname: val }));
    }, [dispatch]);
    const onChangeAge = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(val ?? 0) }));
    }, [dispatch]);
    const onChangeCity = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ city: val ?? '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ username: val ?? '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ avatar: val ?? '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);
    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <VStack
                max={ true }
                className={ classNames(cls.EditableProfileCard, {}, [className]) }
            >
                {
                    validateErrors?.length && validateErrors.map((err: ValidateProfileError) =>
                        (
                            <Text
                                theme={ TextTheme.ERROR }
                                text={ validateErrorTranslates[err] }
                                key={ err }
                            />
                        )
                    )
                }
                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    readonly={ readonly }
                    onChangeFirstname={ onChangeFirstname }
                    onChangeLastname={ onChangeLastname }
                    onChangeAge={ onChangeAge }
                    onChangeCurrency={ onChangeCurrency }
                    onChangeCountry={ onChangeCountry }
                    onChangeCity={ onChangeCity }
                    onChangeUsername={ onChangeUsername }
                    onChangeAvatar={ onChangeAvatar }
                />
            </VStack>
        </DynamicModuleLoader>

    );
});

EditableProfileCard.displayName = 'EditableProfileCard';
