import { type FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileData,
    getProfileError, getProfileForm,
    getProfileIsLoading, getProfileReadOnly, profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ firstname: val }));
    }, [dispatch]);
    const onChangeLastname = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ lastname: val }));
    }, [dispatch]);
    const onChangeAge = useCallback((val?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(val ?? 0) }));
    }, [dispatch]);
    const onChangeCurrency = useCallback(() => {}, []);
    const onChangeCountry = useCallback(() => {}, []);
    const onChangeCity = useCallback(() => {}, []);
    const onChangeUsername = useCallback((val?: string) => {}, []);
    const onChangeAvatar = useCallback((val?: string) => {}, []);

    return (
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <div className={ classNames('', {}, [className ?? '']) }>
                <ProfilePageHeader/>
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
