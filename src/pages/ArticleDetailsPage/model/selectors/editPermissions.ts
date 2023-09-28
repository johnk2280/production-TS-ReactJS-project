import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getArticleDetailsPageHasEditPermission = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }

        return article.user.id === user.id;
    }
);
