import React, { type FC, memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

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
                <Button
                    theme={ ButtonTheme.BACKGROUND_INVERTED }
                    className={ cls.links }
                    onClick={ onLogout }
                >
                    { t('Выйти') }
                </Button>

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
