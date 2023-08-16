import { type FC, memo, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page: FC<PageProps> = memo((props: PageProps) => {
    const {
        className = '',
        children
    } = props;

    return (
        <section className={ classNames(cls.Page, {}, [className]) }>
            { children }
        </section>
    );
});

Page.displayName = 'Page';
