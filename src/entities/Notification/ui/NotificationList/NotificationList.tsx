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

    return (
        <div className={ classNames(cls.NotificationList, {}, [className]) }>

        </div>
    );
});

NotificationList.displayName = 'NotificationList';
