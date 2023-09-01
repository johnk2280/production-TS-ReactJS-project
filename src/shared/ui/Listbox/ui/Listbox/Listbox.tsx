import { type ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import cls from './Listbox.module.scss';
import { HStack, VStack } from '../../../Stack';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';

export interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled: boolean;
}

type DropDownDirection = 'top' | 'bottom';

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

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop
};

export function Listbox (props: ListboxProps): JSX.Element {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = 'bottom',
        label
    } = props;

    const optionsClasses: string[] = [mapDirectionClass[direction]];

    return (
        <HStack gap={ '16' }>
            { label && <span className={ classNames('', { [cls.disabled]: readonly }) }>{ label }</span> }
            <HListbox
                as={ 'div' }
                className={ classNames(cls.Listbox, {}, [className ?? '']) }
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
                                                [cls.active]: active,
                                                [cls.selected]: selected,
                                                [cls.disabled]: disabled
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
