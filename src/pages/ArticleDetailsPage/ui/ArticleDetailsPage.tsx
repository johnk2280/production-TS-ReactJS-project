import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import cls from './ArticleDetaisPage.module.scss';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailCommentsReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <Page className={ classNames('', {}, [className]) }>
                { t('Статья не найдена') }
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ true }>
            <Page className={ classNames('', {}, [className]) }>
                <ArticleDetails id={ id }/>
                <Text
                    className={ cls.commentTitle }
                    title={ t('Комментарии') }
                />
                <AddCommentForm
                    onSendComment={ onSendComment }
                />
                <CommentList isLoading={ commentsIsLoading } comments={ comments }/>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
