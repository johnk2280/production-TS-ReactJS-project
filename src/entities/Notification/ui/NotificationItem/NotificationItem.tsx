import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
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

    const content = (
        <Card
            theme={ CardTheme.OUTLINED }
            className={ classNames(cls.NotificationItem, {}, [className]) }
        >
            <Text title={ item.title } text={ item.description }/>
        </Card>

    );

    if (item.href) {
        return (
            <AppLink className={ cls.link } to={ item.href } target={ '_blank' } >
                { content }
            </AppLink>
        );
    }

    return content;
});

NotificationItem.displayName = 'NotificationItem';
