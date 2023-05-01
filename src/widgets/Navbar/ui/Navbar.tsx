import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    return (
        <div className={ classNames(cls.Navbar, {}, [className ?? '']) }>
            <Button
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                className={ cls.links }
                onClick={ onShowModal }
            >
                { t('Войти') }
            </Button>
            <LoginModal
                isOpen={ isAuthModal }
                onClose={ onCloseModal }
            />
        </div>
    );
};
