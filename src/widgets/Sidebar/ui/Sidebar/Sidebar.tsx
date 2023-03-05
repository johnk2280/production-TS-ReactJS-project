import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/langSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { use } from 'i18next'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        // setCollapsed(prev => !prev);
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid = 'sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.link}
                >
                    { t('Главная') }
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.link}
                >
                    { t('О сайте') }
                </AppLink>
            </div>

            <Button
                data-testid={'toggleButton'}
                onClick={onToggle}
                className={cls.collapseBtn + ' !!!!!'}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                isSquare={true}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    )
}
