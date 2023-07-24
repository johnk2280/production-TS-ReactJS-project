import React, { type FC, memo } from 'react';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { type SidebarItemType } from '../../model/types/sidebarTypes';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props;

    return (
        <AppLink
            theme={ AppLinkTheme.SECONDARY }
            to={ item.path }
            className={ classNames(cls.item, { [cls.collapsed]: collapsed }) }
        >
            <item.Icon className={ cls.icon }/>
            <span className={ cls.link }>
                { item.text }
            </span>
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';