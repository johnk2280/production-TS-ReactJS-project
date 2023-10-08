import { type ArticleRatingProps } from '@/features/ArticleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { lazy, Suspense } from 'react';

const ArticleRatingLazy = lazy(
    async () => await import('./ArticleRating')
);

export const ArticleRatingAsync = (props: ArticleRatingProps): JSX.Element => {
    return (
        <Suspense fallback={ <Skeleton width={ '100%' } height={ 140 }/> }>
            <ArticleRatingLazy { ...props }/>
        </Suspense>
    );
};
