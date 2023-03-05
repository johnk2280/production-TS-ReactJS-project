import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/langSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)
    // const { t } = useTranslation()

    const onToggle = (): void => {
        // setCollapsed(prev => !prev);
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid = 'sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}
        >
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
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
