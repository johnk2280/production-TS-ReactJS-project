import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import type { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props: NotificationItemProps) => {
    const {
        className = '',
        item
    } = props;

    return (
        <div className={ classNames(cls.NotificationItem, {}, [className]) }>
            { JSON.stringify(item) }
        </div>
    );
});

NotificationItem.displayName = 'NotificationItem';
