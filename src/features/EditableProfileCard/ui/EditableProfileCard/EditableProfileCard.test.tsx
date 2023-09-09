import {fireEvent, render, screen} from '@testing-library/react';
import {EditableProfileCard} from "./EditableProfileCard";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('first', () => {
        componentRender(<EditableProfileCard/>)
        expect(screen.getByTestId('sidebar'))
    });
})
