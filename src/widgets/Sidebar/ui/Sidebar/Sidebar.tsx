import { classNames } from '@/shared/lib/classNames/classNames';
import React, { type FC, memo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from '@/features/langSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack } from '@/shared/ui/Stack';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);

    const onToggle = (): void => {
        // setCollapsed(prev => !prev);
        setCollapsed(!collapsed);
    };

    return (
        <aside
            data-testid = "sidebar"
            className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? '']) }
        >
            <VStack
                role={ 'navigation' }
                className={ cls.items }
                gap={ '8' }
            >
                { sidebarItems.map(item =>
                    <SidebarItem
                        key={ item.path }
                        item={ item }
                        collapsed={ collapsed }
                    />) }
            </VStack>
            <Button
                data-testid={ 'toggleButton' }
                onClick={ onToggle }
                className={ cls.collapseBtn + ' !!!!!' }
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                isSquare={ true }
                size={ ButtonSize.L }
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={ cls.switchers }>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={ cls.lang }
                    short={ collapsed }
                />
            </div>
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';
