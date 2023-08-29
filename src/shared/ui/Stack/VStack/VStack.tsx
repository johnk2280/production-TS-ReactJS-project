import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './VStack.module.scss';

interface VStackProps {
    className?: string;
}

export const VStack: FC<VStackProps> = memo((props: VStackProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.VStack, {}, [className]) }>

        </div>
    );
});

VStack.displayName = 'VStack';
