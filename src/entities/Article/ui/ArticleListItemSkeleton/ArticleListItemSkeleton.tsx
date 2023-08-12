import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItemSkeleton.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className = '',
        view = ArticleView.SMALL
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={ classNames('', {}, [className, cls[view]]) }>
                <Card >
                    <div className={ cls.header }>
                        <Skeleton width={ 30 } height={ 30 } border={ '50%' }/>
                        <Skeleton width={ 200 } height={ 16 } className={ cls.username }/>
                        <Skeleton width={ 100 } height={ 16 } className={ cls.date }/>
                    </div>
                    <Skeleton width={ 500 } height={ 25 } className={ cls.title }/>
                    <Skeleton width={ 100 } height={ 16 } className={ cls.types }/>
                    <Skeleton width={ '100%' } height={ 240 } className={ cls.img }/>
                    <Skeleton width={ '80%' } height={ 180 } className={ cls.textBlock }/>
                    <div className={ cls.footer }>
                        <Skeleton width={ 120 } height={ 32 } />
                        <Skeleton width={ 60 } height={ 16 } className={ cls.views }/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={ classNames('', {}, [className, cls[view]]) }>
            <Card >
                <div className={ cls.imageWrapper }>
                    <Skeleton width={ '100%' } height={ 240 } className={ cls.img }/>
                </div>
                <div className={ cls.infoWrapper }>
                    <Skeleton width={ 100 } height={ 16 } className={ cls.types }/>
                    <Skeleton width={ 60 } height={ 16 } className={ cls.views }/>
                </div>
                <Skeleton width={ 180 } height={ 25 } className={ cls.title }/>
            </Card>
        </div>
    );
});

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
