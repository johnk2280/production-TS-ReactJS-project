import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/home-link.svg';
import AboutIcon from '@/shared/assets/icons/about-link.svg';
import ProfileIcon from '@/shared/assets/icons/profile-link.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { type SidebarItemType } from '../../types/sidebarTypes';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (user) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте'
            }

        ];

        if (user) {
            sidebarItemsList.push(...[
                {
                    path: `${RoutePath.profile}${user.id}`,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true
                }
            ]
            );
        }
        return sidebarItemsList;
    }
);
