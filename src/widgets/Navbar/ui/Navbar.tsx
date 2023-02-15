import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    return (
        <div className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.link}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                    className={cls.link}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}
