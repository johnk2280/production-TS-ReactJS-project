import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type IComment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

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

    if (isLoading) {
        return (
            <div className={ classNames(cls.CommentCard, {}, [className]) }>
                <div className={ cls.commentHeader }>
                    <Skeleton width={ 30 } height={ 30 } border={ '50%' }/>
                    <Skeleton height={ 16 } width={ 100 } className={ cls.username }/>
                </div>
                <Skeleton width={ '100%' } height={ 50 } className={ cls.text }/>
            </div>
        );
    }

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
