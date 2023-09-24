import { useTheme } from 'app/providers/ThemeProvider';
import { type FC, memo, type ReactNode } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
}

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
    const {
        className = '',
        children,
        onClose,
        isOpen
    } = props;
    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen
    };

    return (
        <Portal>
            <div className={ classNames(cls.Drawer, {}, [className, theme ?? '', 'app_drawer']) }>
                <Overlay onClick={ onClose }/>
                <div className={ cls.content }>
                    { children }
                </div>
            </div>
        </Portal>

    );
});

Drawer.displayName = 'Drawer';
