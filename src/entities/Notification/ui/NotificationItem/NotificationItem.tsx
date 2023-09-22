import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props: NotificationItemProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.NotificationItem, {}, [className]) }>

        </div>
    );
});

NotificationItem.displayName = 'NotificationItem';
