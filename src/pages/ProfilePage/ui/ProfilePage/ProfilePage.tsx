import { type FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
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
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <div className={ classNames('', {}, [className ?? '']) }>
                <ProfilePageHeader/>
                <ProfileCard
                    data={ data }
                    isLoading={ isLoading }
                    error={ error }
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
