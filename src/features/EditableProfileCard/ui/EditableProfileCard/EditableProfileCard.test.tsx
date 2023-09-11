import {screen} from '@testing-library/react';
import {EditableProfileCard} from "./EditableProfileCard";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";
import {ProfileType} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {profileReducer} from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";
import {$api} from "shared/api/api";

const profile: ProfileType = {
    id: "1",
    firstname: "Super Evgen",
    lastname: "Kungurov",
    age: 42,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Chelyabinsk",
    username: "admin",
    avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            error: '',
            isLoading: false,
            data: profile,
            form: profile,
            validateError: []
        },
        user: {
            authData: {id: '1'}
        }
    },
    asyncReducers: {
        profile: profileReducer,
    },
}

describe('Sidebar', () => {
    test('Переключение режима reedonly на редактирование', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения обнуляются', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'qwerty');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'qwerty');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('qwerty');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('qwerty');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Super Evgen');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Kungurov');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.error.Paragraph')).toBeInTheDocument();
    });

    test('На сервер уходит PUT запрос', async () => {
        const mockPutRequest = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Evgen');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutRequest).toHaveBeenCalled();

    });

})
