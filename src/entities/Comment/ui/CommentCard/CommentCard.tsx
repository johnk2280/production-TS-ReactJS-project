import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type IComment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

interface CommentCardProps {
    className?: string;
    item: IComment;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
    const {
        className = '',
        item,
        isLoading
    } = props;

    return (
        <div className={ classNames(cls.CommentCard, {}, [className]) }>
            <div className={ cls.commentHeader }>
                <Avatar
                    src={ item.user.avatar }
                    size={ 30 }
                />
                <Text
                    className={ cls.username }
                    title={ item.user.username }
                />
            </div>
            <Text
                className={ cls.text }
                text={ item.text }
            />
        </div>
    );
});

CommentCard.displayName = 'CommentCard';
