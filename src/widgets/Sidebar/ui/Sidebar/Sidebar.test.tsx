import {fireEvent, render, screen} from '@testing-library/react';
import {Sidebar} from "./Sidebar";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('first', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar'))
    });
    test('second', () => {
        componentRender(<Sidebar/>);
        const toggleBtn = screen.getByTestId('toggleButton');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
})
