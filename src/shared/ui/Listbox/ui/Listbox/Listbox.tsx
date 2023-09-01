import { useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import cls from './Listbox.module.scss';
import { VStack } from 'shared/ui/Stack';

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
];

export function Listbox (): JSX.Element {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    return (
        <HListbox
            as={ 'div' }
            className={ cls.Listbox }
            value={ selectedPerson }
            onChange={ setSelectedPerson }
        >
            <HListbox.Button
                className={ cls.trigger }
            >
                { selectedPerson.name }
            </HListbox.Button>
            <HListbox.Options
                className={ cls.options }
            >
                <VStack
                    gap={ '8' }
                    max={ true }
                    align={ 'start' }
                >
                    { people.map((person) => (
                        <HListbox.Option
                            key={ person.id }
                            value={ person }
                            disabled={ person.unavailable }
                            className={ cls.item }
                        >
                            { person.name }
                        </HListbox.Option>
                    )) }
                </VStack>

            </HListbox.Options>
        </HListbox>
    );
}
