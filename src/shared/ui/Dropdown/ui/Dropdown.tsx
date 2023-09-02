import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Menu } from '@headlessui/react';
import { VStack } from '../../../ui/Stack';
import { Fragment } from 'react';

export interface DropdownProps {
    className?: string;
}

export function Dropdown (props: DropdownProps): JSX.Element {
    const {
        className
    } = props;
    return (
        <Menu
            as={ 'div' }
            className={ classNames(cls.Dropdown, {}, [className ?? '']) }
        >
            <Menu.Button className={ cls.btn }>
                More
            </Menu.Button>
            <Menu.Items className={ cls.menu }>
                <VStack gap={ '8' }>
                    <Menu.Item as={ Fragment }>
                        { ({ active, disabled }) => (
                            <li
                                className={
                                    classNames(cls.item, { [cls.active]: active, [cls.disabled]: disabled })
                                }
                            >
                                Account settings
                            </li>
                        ) }
                    </Menu.Item>

                </VStack>

            </Menu.Items>
        </Menu>
    );
}
