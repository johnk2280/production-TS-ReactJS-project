import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import React, { type FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Dropdown } from 'shared/ui/Popups';
import { HStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import NotificationIcon from '../../../shared/assets/icons/notification-20-20.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin ?? isManager;

    if (authData != null) {
        return (
            <header className={ classNames(cls.Navbar, {}, [className ?? '']) }>
                <HStack max={ true }>
                    <Text
                        className={ cls.appName }
                        title={ t('JOHNK2280') }
                        theme={ TextTheme.INVERTED }
                    />
                    <AppLink
                        to={ RoutePath.article_create }
                        theme={ AppLinkTheme.SECONDARY }
                        className={ cls.creatLink }
                    >
                        { t('Создать статью') }
                    </AppLink>
                    <HStack
                        gap={ '16' }
                        className={ cls.actions }
                    >
                        <Button
                            theme={ ButtonTheme.CLEAR }
                        >
                            <Icon Svg={ NotificationIcon } inverted={ true }/>
                        </Button>
                        <Dropdown
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
                    </HStack>

                </HStack>
            </header>
        );
    }

    return (
        <header className={ classNames(cls.Navbar, {}, [className ?? '']) }>
            <Button
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                className={ cls.links }
                onClick={ onShowModal }
            >
                { t('Войти') }
            </Button>
            {
                isAuthModal && (
                    <LoginModal
                        isOpen={ isAuthModal }
                        onClose={ onCloseModal }
                    />
                )
            }

        </header>
    );
});

Navbar.displayName = 'Navbar';
