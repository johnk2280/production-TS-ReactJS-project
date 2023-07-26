import { type FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { Simulate } from 'react-dom/test-utils';
import suspend = Simulate.suspend;
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <div className={ classNames('', {}, [className ?? '']) }>
                { t('Страница профиля') }
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
