import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Menu } from '@headlessui/react';

export function Dropdown (): JSX.Element {
    return (
        <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    { ({ active }) => (
                        <a
                            className={ `${active && 'bg-blue-500'}` }
                            href="/account-settings"
                        >
                            Account settings
                        </a>
                    ) }
                </Menu.Item>

        </Menu>
    );
}
