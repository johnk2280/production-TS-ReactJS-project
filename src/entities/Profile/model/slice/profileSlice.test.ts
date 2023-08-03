import {ProfileSchema, ValidateProfileError} from "../types/profileSchema";
import {profileActions, profileReducer} from "./profileSlice";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {updateProfileData} from "entities/Profile";
import {TRUE} from "sass";


const data = {
    firstname: 'Evgen',
    lastname: 'Kungurov',
    age: 42,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Chelyabinsk',
    username: 'admin',
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({readonly: true});

    });
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data
        };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            firstname: 'Evgen!',
            lastname: 'Kungurov!',
            age: 41,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        })))
            .toEqual({
                form: {
                    firstname: 'Evgen!',
                    lastname: 'Kungurov!',
                    age: 41,
                    currency: Currency.USD,
                    country: Country.Russia,
                    city: 'Moscow',
                    username: 'admin',
                }
            });

    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({readonly: true, validateError: undefined});

    });

    test('test updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'sadfg',
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                error: '',
                validateError: undefined,
            });
    });

    test('test updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            error: '',
            validateError: undefined,
            readonly: true
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                error: '',
                validateError: undefined,
                form: data,
                data: data,
                readonly: true
            });
    });
})