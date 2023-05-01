import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal';
import { type FC } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm/>
        </Modal>
    );
};
