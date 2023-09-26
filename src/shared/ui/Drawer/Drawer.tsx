import { useTheme } from 'app/providers/ThemeProvider';
import { type FC, memo, type ReactNode } from 'react';
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { classNames, type Mods } from '../../lib/classNames/classNames';
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

export const DrawerContent: FC<DrawerProps> = memo((props: DrawerProps) => {
    const {
        className = '',
        children,
        onClose,
        isOpen,
        lazy
    } = props;
    const { theme } = useTheme();

    const { isMounted, isClosing, close } = useModal({
        isOpen,
        onClose,
        animationDelay: 300
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ classNames(cls.Drawer, mods, [className, theme ?? '', 'app_drawer']) }>
                <Overlay onClick={ close }/>
                <div className={ cls.content }>
                    { children }
                </div>
            </div>
        </Portal>

    );
});

export const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return (
        <DrawerContent { ...props }>{ props.children }</DrawerContent>
    );
});

Drawer.displayName = 'Drawer';
DrawerContent.displayName = 'DrawerContent';
