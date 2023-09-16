import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { type FC, memo, useCallback, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string;
    articleId?: string;
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
            <Suspense fallback={ <div>...</div> }>
                <AddCommentForm
                    onSendComment={ onSendComment }
                />
            </Suspense>

            <CommentList isLoading={ commentsIsLoading } comments={ comments }/>

        </VStack>
    );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
