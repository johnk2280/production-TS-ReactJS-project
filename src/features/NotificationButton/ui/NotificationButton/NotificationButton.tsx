import { NotificationList } from 'entities/Notification';
import React, { type FC, memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface notificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<notificationButtonProps> = memo((props: notificationButtonProps) => {
    const {
        className = ''
    } = props;

    return (
        <Popover
            className={ classNames(cls.NotificationButton, {}, [className ?? '']) }
            trigger={
                <Button theme={ ButtonTheme.CLEAR }>
                    <Icon Svg={ NotificationIcon } inverted={ true }/>
                </Button>
            }
            direction={ 'bottom left' }
        >
            <NotificationList className={ cls.notifications }/>
        </Popover>
    );
});

NotificationButton.displayName = 'NotificationButton';
