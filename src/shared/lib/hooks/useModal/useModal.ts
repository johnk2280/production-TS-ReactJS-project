import { useState, useRef, useEffect, useCallback } from 'react';

export interface UseModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelay: number;
}

export interface UseModalReturn {
    isClosing: boolean;
    isMounted: boolean;
    close: () => void;
}

export const useModal = (props: UseModalProps): UseModalReturn => {
    const {
        animationDelay,
        isOpen = false,
        onClose
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>(); // ссылка используется для реализации анимации закрытия, в нее передается таймер

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback((): void => {
        // Функция закрытия модального окна
        // Закрытие срабатывает только если был передан коллбэк onClose()
        if (onClose != null) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                // Данный таймер реализован для анимации плавного закрытия контентной части модально окна
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

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

    return {
        isClosing,
        isMounted,
        close
    };
};
