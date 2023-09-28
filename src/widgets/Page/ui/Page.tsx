import { type FC, memo, type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, UIActions } from '@/features/UI';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props: PageProps) => {
    const {
        className = '',
        children,
        onScrollEnd
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getUIScrollByPath(state, pathname)
    );

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>): void => {
        dispatch(UIActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }));
    }, 100);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={ wrapperRef }
            className={ classNames(cls.Page, {}, [className]) }
            onScroll={ onScroll }
        >
            { children }
            { onScrollEnd && <div ref={ triggerRef } className={ cls.trigger }></div> }
        </main>
    );
});

Page.displayName = 'Page';
