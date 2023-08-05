import { type FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
    const {
        className = '',
        id
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ true }>
            <div className={ classNames(cls.ArticleDetails, {}, [className]) }>
                ARTICLE DETAILS
            </div>
        </DynamicModuleLoader>

    );
});

ArticleDetails.displayName = 'ArticleDetails';
