import { type FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

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

    const renderBlock = useCallback((block: ArticleBlock) => {
        if (block.type === ArticleBlockType.IMAGE) {
            return (
                <ArticleImageBlockComponent
                    className={ cls.block }
                    block={ block }
                    key={ block.id }
                />)
            ;
        } else if (block.type === ArticleBlockType.CODE) {
            return (
                <ArticleCodeBlockComponent
                    className={ cls.block }
                    block={ block }
                    key={ block.id }
                />
            );
        } else if (block.type === ArticleBlockType.TEXT) {
            return (
                <ArticleTextBlockComponent
                    className={ cls.block }
                    block={ block }
                    key={ block.id }
                />
            );
        } else {
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
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
                    size={ TextSize.L }
                />
                <div className={ cls.articleInfo }>
                    <Icon Svg={ EyeIcon } className={ cls.icon }/>
                    <Text text={ String(article?.views) }/>
                </div>
                <div className={ cls.articleInfo }>
                    <Icon Svg={ CalendarIcon } className={ cls.icon }/>
                    <Text text={ String(article?.createdAt) }/>
                </div>
                {
                    article?.blocks.map(renderBlock)
                }

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
