import { Menu } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type DropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../../styles/consts';
import { AppLink } from '../../../../AppLink/AppLink';
import { VStack } from '../../../../Stack';
import cls from './Dropdown.module.scss';
import popupCls from '../../../styles/popup.module.scss';

export interface DropdownItem {
    value: string;
    content: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
}

export interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

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
            className={ classNames(cls.Dropdown, {}, [className ?? '', popupCls.popup]) }
        >
            <Menu.Button className={ cls.btn }>
                { trigger }
            </Menu.Button>
            <Menu.Items className={ classNames(cls.menu, {}, optionsClasses) }>
                <VStack gap={ '8' }>
                    { items.map(item => {
                        const content = ({ active, disabled }: { active: boolean; disabled: boolean }): JSX.Element => (
                            <button
                                type={ 'button' }
                                onClick={ item.onClick }
                                disabled={ item.disabled }
                                className={
                                    classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: disabled
                                        }
                                    )
                                }
                            >
                                { item.content }
                            </button>
                        );

                        if (item.href) {
                            return (
                                <Menu.Item
                                    as={ AppLink }
                                    to={ item.href }
                                    key={ item.value }
                                    disabled={ item.disabled }
                                >
                                    { content }
                                </Menu.Item>
                            );
                        }
                        return (
                            <Menu.Item
                                as={ Fragment }
                                key={ item.value }
                                disabled={ item.disabled }
                            >
                                { content }
                            </Menu.Item>
                        );
                    }) }
                </VStack>

            </Menu.Items>

        </Menu>
    );
}
