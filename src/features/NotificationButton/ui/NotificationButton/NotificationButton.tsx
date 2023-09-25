import { NotificationList } from 'entities/Notification';
import React, { type FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
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
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false);
    }, []);

    const trigger = (
        <Button onClick={ onOpenDrawer } theme={ ButtonTheme.CLEAR }>
            <Icon Svg={ NotificationIcon } inverted={ true }/>
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={ classNames(cls.NotificationButton, {}, [className ?? '']) }
                    trigger={ trigger }
                    direction={ 'bottom left' }
                >
                    <NotificationList className={ cls.notifications }/>
                </Popover>
            </BrowserView>
            <MobileView>
                { trigger }
                <Drawer onClose={ onCloseDrawer } isOpen={ isOpenDrawer }>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </div>
    );
});

NotificationButton.displayName = 'NotificationButton';
