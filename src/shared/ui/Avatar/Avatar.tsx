import { type CSSProperties, type FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className = '',
        src,
        alt = '',
        size
    } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        };
    }, [size]);

    return (
        <img
            className={ classNames(cls.Avatar, {}, [className]) }
            src={ src }
            alt={ alt }
            style={ styles }
        />
    );
};
