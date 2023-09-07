import {StateSchema} from "app/providers/StoreProvider";
import {getProfileForm} from "./getProfileForm";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";


describe('getProfileForm.test', () => {
    test('should return error', () => {
        const formData = {
            firstname: 'Evgen',
            lastname: 'Kungurov',
            age: 42,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Chelyabinsk',
            username: 'admin',
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(formData)
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})