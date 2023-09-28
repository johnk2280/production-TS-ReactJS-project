import { isUserAdmin, isUserManager, getUserAuthData, userActions } from '@/entities/User';
import React, { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props: AvatarDropdownProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin ?? isManager;

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }
    return (
        <Dropdown
            className={ classNames(cls.AvatarDropdown, {}, [className]) }
            trigger={ <Avatar size={ 30 } src={ authData.avatar }/> }
            items={ [
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админка'),
                        value: 'admin',
                        href: RoutePath.admin_panel
                    }]
                    : []),
                {
                    content: t('Профиль'),
                    value: 'profile',
                    href: RoutePath.profile + authData.id
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                    value: 'logout'
                }
            ] }
            direction={ 'bottom left' }
        />
    );
});

AvatarDropdown.displayName = 'AvatarDropdown';
