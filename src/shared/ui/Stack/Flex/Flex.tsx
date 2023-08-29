import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
import { type FC, type ReactNode } from 'react';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';

interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween
};
const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn
};

export const Flex: FC<FlexProps> = (props: FlexProps) => {
    const {
        className = '',
        children,
        justify = 'start',
        align = 'center',
        direction = 'row'
    } = props;

    const classes: string[] = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction]
    ];

    return (
        <div className={ classNames(cls.Flex, {}, classes) }>
            { children }
        </div>
    );
};
