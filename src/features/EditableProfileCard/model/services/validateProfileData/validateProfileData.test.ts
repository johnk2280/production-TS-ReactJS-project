import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {ValidateProfileError} from "features/EditableProfileCard";
import {validateProfileData} from "./validateProfileData";


jest.mock('axios');

const data = {
            firstname: 'Evgen',
            lastname: 'Kungurov',
            age: 42,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Chelyabinsk',
            username: 'admin',
        }

describe('validateProfileData.test', () => {
    test('success validate', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);

    });

    test('validate error with incorrect user data ', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: ''
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    });
    test('validate error with incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    });
    test('validate error with incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    });
    test('validate error with all errors', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    });

})