import { EditableProfileCard } from 'features/EditableProfileCard';
import { type FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={ classNames('', {}, [className ?? '']) }>
            <VStack
                gap={ '16' }
                max={ true }
            >
                <EditableProfileCard id={ id }/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;
