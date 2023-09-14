import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type IComment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';

interface CommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
    const {
        className = '',
        comments,
        isLoading
    } = props;
    const { t } = useTranslation('article-details');

    if (isLoading) {
        return (
            <VStack
                max={ true }
                gap={ '16' }
                className={ classNames('', {}, [className]) }
            >
                <CommentCard isLoading={ isLoading }/>
                <CommentCard isLoading={ isLoading }/>
                <CommentCard isLoading={ isLoading }/>
                <CommentCard isLoading={ isLoading }/>

            </VStack>
        );
    }

    return (
        <VStack
            gap={ '16' }
            max={ true }
            className={ classNames('', {}, [className]) }
        >
            {
                comments?.length
                    ? comments.map(comment => (
                        <CommentCard
                            item={ comment }
                            key={ comment.id }
                            isLoading={ isLoading }
                        />
                    ))
                    : <Text text={ t('Комментарии отсутствуют') }/>
            }
        </VStack>
    );
});

CommentList.displayName = 'CommentList';
