import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Menu } from '@headlessui/react';
import { VStack } from '../../../ui/Stack';
import { Fragment, type ReactNode } from 'react';
import { type DropDownDirection } from 'shared/types/ui';

export interface DropdownItem {
    value: string;
    content: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    href?: string;
}

export interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'top left': cls.optionsTopLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight
};

export function Dropdown (props: DropdownProps): JSX.Element {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right'
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as={ 'div' }
            className={ classNames(cls.Dropdown, {}, [className ?? '']) }
        >
            <Menu.Button className={ cls.btn }>
                { trigger }
            </Menu.Button>
            <Menu.Items className={ classNames(cls.menu, {}, optionsClasses) }>
                <VStack gap={ '8' }>
                    { items.map(item => (
                        <Menu.Item
                            as={ Fragment }
                            key={ item.value }
                            disabled={ item.disabled }
                        >
                            { ({ active, disabled }) => (
                                <button
                                    type={ 'button' }
                                    onClick={ item.onClick }
                                    className={
                                        classNames(cls.item, { [cls.active]: active, [cls.disabled]: disabled })
                                    }
                                >
                                    { item.content }
                                </button>
                            ) }
                        </Menu.Item>
                    )) }
                </VStack>

            </Menu.Items>
        </Menu>
    );
}
