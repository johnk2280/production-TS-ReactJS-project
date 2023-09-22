import { NotificationItem } from 'entities/Notification/ui/NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((props: NotificationListProps) => {
    const {
        className = ''
    } = props;
    const {
        data: notifications,
        isLoading,
        error
    } = useGetNotificationsQuery(null);

    if (isLoading) {
        return (
            <VStack
                gap={ '16' }
                max={ true }
                className={ classNames(cls.NotificationList, {}, [className]) }
            >
                <Skeleton width={ '100%' } border={ '8px' } height={ '80px' }/>
                <Skeleton width={ '100%' } border={ '8px' } height={ '80px' }/>
                <Skeleton width={ '100%' } border={ '8px' } height={ '80px' }/>
            </VStack>
        );
    }

    return (
        <VStack
            gap={ '16' }
            max={ true }
            className={ classNames(cls.NotificationList, {}, [className]) }
        >
            { notifications?.map(notice => (
                <NotificationItem
                    key={ notice.id }
                    item={ notice }
                />
            )) }
        </VStack>
    );
});

NotificationList.displayName = 'NotificationList';
