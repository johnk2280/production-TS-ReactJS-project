import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props;

    return (
        <Page className={ classNames('', {}, [className ?? '']) }>
            <VStack
                gap={ '16' }
                max={ true }
            >
                <ProfilePageHeader/>
                <EditableProfileCard/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;
