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

    if (isLoading ?? error ?? !notifications) {
        // TODO: просто заглушка - в случае загрузки отобразить спиннер, в случае ошибки - сообщение
        return null;
    }

    return (
        <div className={ classNames(cls.NotificationList, {}, [className]) }>

        </div>
    );
});

NotificationList.displayName = 'NotificationList';
