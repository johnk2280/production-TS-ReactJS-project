import { Popover } from '@headlessui/react';
import { type JSX } from 'react';

interface PopoverProps {
    className?: string;
}

export function MyPopover (props: PopoverProps): JSX.Element {
    const { className } = props;
    return (
        <Popover className="relative">
            <Popover.Button>Solutions</Popover.Button>

            <Popover.Panel className="absolute z-10">

            </Popover.Panel>
        </Popover>
    );
}
