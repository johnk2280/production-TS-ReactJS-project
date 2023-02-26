import {fireEvent, render, screen} from '@testing-library/react';
import {Sidebar} from "./Sidebar";
import {renderWithTranslation} from "shared/lib/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('first', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar'))
    });
    test('second', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('toggleButton');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });



})
