import React, { type FC, type ReactNode } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose,
        lazy// Коллбэк для закрытия окна, т.е. для изменения состояния isOpen в родительском компоненте
    } = props;
    const { isMounted, isClosing, close } = useModal({
        isOpen,
        onClose,
        animationDelay: ANIMATION_DELAY
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ classNames(cls.Modal, mods, [className ?? '']) }>
                <Overlay onClick={ close } />
                <div className={ classNames(cls.content) }>
                    { children }
                </div>
            </div>
        </Portal>
    );
};
