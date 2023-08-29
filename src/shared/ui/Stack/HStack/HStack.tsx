import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HStack.module.scss';

interface HStackProps {
    className?: string;
}

export const HStack: FC<HStackProps> = memo((props: HStackProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.HStack, {}, [className]) }>

        </div>
    );
});

HStack.displayName = 'HStack';
