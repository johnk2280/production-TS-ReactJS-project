import { NotificationList } from 'entities/Notification';
import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { NotificationButton } from 'features/NotificationButton';
import React, { type FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { HStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

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
                        <NotificationButton/>
                        <AvatarDropdown/>
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
