import React, { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback((): void => {
        setIsAuthModal((prev) => !prev)
    }, [setIsAuthModal])

    return (
        <div className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fuga fugiat id qui sunt vero
                vitae, voluptatibus. Architecto cupiditate distinctio, dolor ducimus error ex excepturi expedita
                facilis id minima molestiae natus necessitatibus, nihil omnis perferendis provident quas quos
                reprehenderit sunt voluptatem? Accusamus adipisci, alias aperiam, beatae dolorum earum est eveniet

            </Modal>
        </div>
    )
}
