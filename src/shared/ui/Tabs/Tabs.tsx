import { type FC, memo, type ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from 'shared/ui/Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
    const {
        className = '',
        tabs,
        onTabClick,
        value
    } = props;

    // Используется замыкание
    const clickHandle = useCallback((newTab: TabItem) => {
        return () => {
            onTabClick(newTab);
        };
    }, [onTabClick]);

    return (
        <div className={ classNames(cls.Tabs, {}, [className]) }>
            {
                tabs.map(tab => (
                    <Card
                        theme={ tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED }
                        className={ cls.tab }
                        key={ tab.value }
                        onClick={ () => clickHandle(tab) }
                    >
                        { tab.content }
                    </Card>
                ))
            }
        </div>
    );
});

Tabs.displayName = 'Tabs';
