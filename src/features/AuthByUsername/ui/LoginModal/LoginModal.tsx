import { type FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

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
                <LoginFormAsync
                    onSuccess={ onClose }
                />
            </Suspense>
        </Modal>
    );
};
