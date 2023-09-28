import { Listbox as HListbox } from '@headlessui/react';
import { type ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropDownDirection } from '@/shared/types/ui';
import { Button } from '../../../../../Button/Button';
import { HStack, VStack } from '../../../../../Stack';
import { mapDirectionClass } from '../../../../styles/consts';
import cls from './Listbox.module.scss';
import popupCls from '../../../../styles/popup.module.scss';

export interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled: boolean;
}

interface ListboxProps {
    items?: ListboxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export function Listbox (props: ListboxProps): JSX.Element {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = 'bottom right',
        label
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={ '16' }>
            { label && <span className={ classNames('', { [cls.disabled]: readonly }) }>{ label }</span> }
            <HListbox
                as={ 'div' }
                className={ classNames(cls.Listbox, {}, [className ?? '', popupCls.popup]) }
                value={ value }
                onChange={ onChange }
                disabled={ readonly }
            >
                <HListbox.Button className={ cls.trigger } as={ 'div' }>
                    <Button disabled={ readonly }>
                        { value ?? defaultValue }
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={ classNames(cls.options, {}, optionsClasses) } >
                    <VStack
                        gap={ '8' }
                        max={ true }
                        align={ 'start' }
                    >
                        { items?.length && items.map((item) => (
                            <HListbox.Option
                                as={ 'div' }
                                key={ item.value }
                                value={ item.value }
                                disabled={ item.disabled }
                                className={ cls.option }
                            >
                                { ({ active, selected, disabled }) => (
                                    <li
                                        className={ classNames(
                                            cls.item,
                                            {
                                                [popupCls.active]: active,
                                                [popupCls.selected]: selected,
                                                [popupCls.disabled]: disabled
                                            }
                                        ) }
                                    >
                                        <HStack
                                            gap={ '4' }
                                            max={ true }
                                            justify={ 'between' }
                                        >
                                            { /* eslint-disable-next-line i18next/no-literal-string */ }
                                            { selected && <p>&#10004;</p> }
                                            { item.content }
                                        </HStack>

                                    </li>
                                ) }
                            </HListbox.Option>
                        )) }
                    </VStack>

                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
