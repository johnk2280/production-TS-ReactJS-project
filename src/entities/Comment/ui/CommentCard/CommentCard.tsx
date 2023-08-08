import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type IComment } from 'entities/Comment';

interface CommentCardProps {
    className?: string;
    item: IComment;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.CommentCard, {}, [className]) }>
            Comment
        </div>
    );
});

CommentCard.displayName = 'CommentCard';
