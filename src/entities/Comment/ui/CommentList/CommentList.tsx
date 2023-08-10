import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { type IComment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';

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
            <div className={ classNames(cls.CommentList, {}, [className]) }>
                <CommentCard className={ cls.comment } isLoading={ isLoading }/>
                <CommentCard className={ cls.comment } isLoading={ isLoading }/>
                <CommentCard className={ cls.comment } isLoading={ isLoading }/>
                <CommentCard className={ cls.comment } isLoading={ isLoading }/>

            </div>
        );
    }

    return (
        <div className={ classNames(cls.CommentList, {}, [className]) }>
            {
                comments?.length
                    ? comments.map(comment => (
                        <CommentCard
                            className={ cls.comment }
                            item={ comment }
                            key={ comment.id }
                            isLoading={ isLoading }
                        />
                    ))
                    : <Text text={ t('Комментарии отсутствуют') }/>
            }
        </div>
    );
});

CommentList.displayName = 'CommentList';
