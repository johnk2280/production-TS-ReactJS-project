import { a, useSpring, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useTheme } from 'app/providers/ThemeProvider';
import { type FC, memo, type ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
    const {
        className = '',
        children,
        onClose,
        isOpen,
        lazy
    } = props;

    const [{ y }, api] = useSpring(() => ({ y: height }));
    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer]);

    const closeDrawer = (velocity = 0): void => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose
        });
    };

    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            offset: [, oy],
            cancel
        }) => {
            if (oy < -70) cancel();

            if (last) {
                oy > height * 0.5 || (vy > 0.5 && dy > 0) ? closeDrawer() : openDrawer();
            } else {
                api.start({ y: oy, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true
        }
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={ classNames(cls.Drawer, {}, [className, theme ?? '', 'app_drawer']) }>
                <Overlay onClick={ closeDrawer }/>
                <a.div
                    className={ cls.sheet }
                    style={ { display, bottom: `calc(-100vh + ${height - 100}px)`, y } }
                    { ...bind() }
                >
                    { children }
                </a.div>
            </div>
        </Portal>
    );
});

// export const Drawer = memo((props: DrawerProps) => {
//     const { isLoaded } = useAnimationLibs();
//
//     if (!isLoaded) {
//         return null;
//     }
//
//     return (
//         <DrawerContent { ...props }>{ props.children }</DrawerContent>
//     );
// });

Drawer.displayName = 'Drawer';
// DrawerContent.displayName = 'DrawerContent';
