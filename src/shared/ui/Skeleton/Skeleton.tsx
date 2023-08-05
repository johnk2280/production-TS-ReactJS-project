import { type CSSProperties, type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
    const {
        className = '',
        border,
        width,
        height
    } = props;

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border
    };

    return (
        <div
            className={ classNames(cls.Skeleton, {}, [className]) }
            style={ styles }
        >

        </div>
    );
});

Skeleton.displayName = 'Skeleton';
