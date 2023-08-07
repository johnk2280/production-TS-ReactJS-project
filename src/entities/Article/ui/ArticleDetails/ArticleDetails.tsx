import { type FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg';

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
    const { t } = useTranslation('article-details');

    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={ cls.avatar } width={ 200 } height={ 200 } border={ '50%' }/>
                <Skeleton className={ cls.title } width={ 200 } height={ 32 }/>
                <Skeleton className={ cls.skeleton } width={ '100%' } height={ 24 }/>
                <Skeleton className={ cls.skeleton } width={ '100%' } height={ 240 }/>
                <Skeleton className={ cls.skeleton } width={ '100%' } height={ 240 }/>
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={ TextAlign.CENTER }
                title={ t('Произошла ошибка при загрузке статьи') }
            />
        );
    } else {
        content = (
            <>
                <div className={ cls.avatarWrapper }>
                    <Avatar
                        size={ 200 }
                        src={ article?.img }
                        className={ cls.avatar }
                    />
                </div>
                <Text
                    className={ cls.title }
                    title={ article?.title }
                    text={ article?.subtitle }
                />
                <div className={ cls.articleInfo }>
                    <EyeIcon className={ cls.icon }/>
                    <Text text={ String(article?.views) }/>
                </div>
                <div className={ cls.articleInfo }>
                    <CalendarIcon className={ cls.icon }/>
                    <Text text={ String(article?.views) }/>
                </div>

            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ true }>
            <div className={ classNames(cls.ArticleDetails, {}, [className]) }>
                { content }
            </div>
        </DynamicModuleLoader>

    );
});

ArticleDetails.displayName = 'ArticleDetails';
