import React, { type FC, memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown';
import { HStack } from 'shared/ui/Stack';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                    <Dropdown
                        className={ cls.dropdown }
                        trigger={ <Avatar size={ 30 } src={ authData.avatar }/> }
                        items={ [
                            {
                                content: t('Выйти'),
                                onClick: onLogout,
                                value: 'logout'
                            }
                        ] }
                        direction={ 'bottom left' }
                    />
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
