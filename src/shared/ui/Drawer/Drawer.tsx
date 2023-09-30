import { useTheme } from '@/app/providers/ThemeProvider';
import { useAnimationLibs, AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { type FC, type ReactNode, useCallback, useEffect } from 'react';
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

export const DrawerContent: FC<DrawerProps> = (props: DrawerProps) => {
    const {
        className = '',
        children,
        onClose,
        isOpen
    } = props;

    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const closeDrawer = (velocity = 0): void => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose
        });
    };

    const bind = Gesture.useDrag(
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
                <Spring.a.div
                    className={ cls.sheet }
                    style={ { display, bottom: `calc(-100vh + ${height - 100}px)`, y } }
                    { ...bind() }
                >
                    { children }
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync: FC<DrawerProps> = (props) => {
    const { isLoaded } = useAnimationLibs();
    const { children, ...otherProps } = props;

    if (!isLoaded) {
        return null;
    }

    return (
        <DrawerContent { ...otherProps }>
            { children }
        </DrawerContent>
    );
};

export const Drawer: FC<DrawerProps> = (props) => {
    const { children, ...otherProps } = props;

    return (
        <AnimationProvider>
            <DrawerAsync { ...otherProps }>
                { children }
            </DrawerAsync>
        </AnimationProvider>

    );
};
