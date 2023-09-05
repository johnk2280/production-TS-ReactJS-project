import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    articleId: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props: ArticleDetailsCommentsProps) => {
    const {
        className = '',
        articleId
    } = props;
    const { t } = useTranslation('article-details');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack
            gap={ '16' }
            max={ true }
            className={ classNames('', {}, [className]) }
        >
            <Text
                title={ t('Комментарии') }
                size={ TextSize.L }
            />
            <AddCommentForm
                onSendComment={ onSendComment }
            />
            <CommentList isLoading={ commentsIsLoading } comments={ comments }/>

        </VStack>
    );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
