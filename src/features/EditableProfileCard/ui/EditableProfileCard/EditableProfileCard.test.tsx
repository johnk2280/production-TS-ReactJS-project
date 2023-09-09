import {screen} from '@testing-library/react';
import {EditableProfileCard} from "./EditableProfileCard";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";
import {ProfileType} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {profileReducer} from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";

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


describe('Sidebar', () => {
    test('first', () => {
        componentRender(<EditableProfileCard id={'1'}/>, {
            initialState: {
                profile: {
                    readonly: true,
                    error: '',
                    isLoading: false,
                    data: profile,
                    form: profile,
                    validateError: []
                }
            },
            asyncReducers: {
                profile: profileReducer,
            },
        })
        userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    });
})
