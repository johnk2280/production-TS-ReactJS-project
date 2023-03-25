import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import React, { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/ui/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose // коллбэк для закрытия окна, т.е. для изменения состояния isOpen в родительском компоненте
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>() // ссылка используется для реализации анимации закрытия, в нее передается таймер
    const { theme } = useTheme()

    const closeHandler = useCallback((): void => {
        // Функция закрытия модального окна
        // Закрытие срабатывает только если был передан коллбэк onClose()
        if (onClose != null) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                // Данный таймер реализован для анимации плавного закрытия контентной части модально окна
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            console.log(e.key)
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent): void => {
        // Блокирует клик на контентную часть, что бы не срабатывала функция closeHandler()
        // и не закрывалось модальное окно при клике на контентную часть
        e.stopPropagation()
    }

    useEffect(() => {
        return () => {
            if (isOpen) {
                window.addEventListener('keydown', onKeyDown)
            }
            // @ts-expect-error TS2769: No overload matches this call.
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className ?? '', theme ?? '', 'app_modal'])}>
                <div className={classNames(cls.overlay)} onClick={closeHandler}>
                    <div className={classNames(cls.content)} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
