import {StateSchema} from "app/providers/StoreProvider";
import {getProfileData} from "./getProfileData";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";


describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            firstname: 'Evgen',
            lastname: 'Kungurov',
            age: 42,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Chelyabinsk',
            username: 'admin',
        }
        const state: DeepPartial<StateSchema> = {
            profile: { data }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})