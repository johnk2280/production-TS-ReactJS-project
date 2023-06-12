import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";

describe('getLoginIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '',
                username: '',
                isLoading: true,
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})