import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
import { type FC, type ReactNode } from 'react';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
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

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32
};

export const Flex: FC<FlexProps> = (props: FlexProps) => {
    const {
        className = '',
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = '8'
    } = props;

    const classes: string[] = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap]
    ];

    return (
        <div className={ classNames(cls.Flex, {}, classes) }>
            { children }
        </div>
    );
};
