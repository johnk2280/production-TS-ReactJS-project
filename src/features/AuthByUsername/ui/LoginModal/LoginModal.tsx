import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal';
import { type FC, Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { useTranslation } from 'react-i18next';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose
    } = props;

    return (
        <Modal
            className={ classNames(cls.LoginModal, {}, [className ?? '']) }
            isOpen={ isOpen }
            onClose={ onClose }
            lazy
        >
            <Suspense fallback={ '' }>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    );
};
