import { Popover } from '@headlessui/react';
import { type JSX, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type DropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export function CustomPopover (props: PopoverProps): JSX.Element {
    const {
        className,
        trigger,
        direction = 'bottom left',
        children
    } = props;
    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <Popover className="relative">
            <Popover.Button
                className={ classNames(cls.Popover, {}, [className ?? '', popupCls.popup]) }
            >
                { trigger }
            </Popover.Button>

            <Popover.Panel className={ classNames(cls.panel, {}, optionsClasses) }>
                { children }
            </Popover.Panel>
        </Popover>
    );
}
