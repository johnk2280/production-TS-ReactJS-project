import {TestAsyncThunk} from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchProfileData} from "./fetchProfileData";
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";


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

describe('fetchProfileData.test', () => {
    test('success fetching', async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);

    });

    test('fetching with error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected')

    });

})