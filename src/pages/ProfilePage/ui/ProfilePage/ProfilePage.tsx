import { type FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profileSchema';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

const reducers: ReducerList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateError);
    const { id } = useParams<{ id: string }>();

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
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <div className={ classNames('', {}, [className ?? '']) }>
                <ProfilePageHeader/>
                {
                    validateErrors?.length && validateErrors.map(err =>
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
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
