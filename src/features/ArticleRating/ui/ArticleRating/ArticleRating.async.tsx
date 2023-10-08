import { lazy } from 'react';

export const ArticleRatingAsync = lazy(
    async () => await import('./ArticleRating')
);
