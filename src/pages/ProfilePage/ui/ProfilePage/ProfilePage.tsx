import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';

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

    return (
        <DynamicModuleLoader
            reducers={ reducers }
            removeAfterUnmount
        >
            <Page className={ classNames('', {}, [className ?? '']) }>
                <VStack
                    gap={ '16' }
                    max={ true }
                >
                    <ProfilePageHeader/>
                    <EditableProfileCard/>
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
