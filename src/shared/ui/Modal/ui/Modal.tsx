import React, { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
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

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>(); // ссылка используется для реализации анимации закрытия, в нее передается таймер

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback((): void => {
        // Функция закрытия модального окна
        // Закрытие срабатывает только если был передан коллбэк onClose()
        if (onClose != null) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                // Данный таймер реализован для анимации плавного закрытия контентной части модально окна
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            console.log(e.key);
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

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
                <Overlay onClick={ closeHandler } className={ cls.overlay }/>
                <div className={ classNames(cls.content) }>
                    { children }
                </div>
            </div>
        </Portal>
    );
};
