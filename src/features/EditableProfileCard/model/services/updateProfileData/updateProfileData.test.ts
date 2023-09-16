import {ValidateProfileError} from "features/EditableProfileCard";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {updateProfileData} from "./updateProfileData";


jest.mock('axios');

const data = {
    id: '1',
    firstname: 'Evgen',
    lastname: 'Kungurov',
    age: 42,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Chelyabinsk',
    username: 'admin',
}

describe('updateProfileData.test', () => {
    test('success updating', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({data: data}))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data,
                    firstname: '',
                    lastname: '',
                }
            }
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    });

})