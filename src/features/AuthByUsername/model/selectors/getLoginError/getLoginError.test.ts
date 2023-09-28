import {StateSchema} from "@/app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '',
                username: '',
                isLoading: false,
                error: 'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})