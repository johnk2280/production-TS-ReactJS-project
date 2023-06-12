import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";

describe('getLoginPassword.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
                username: '',
                isLoading: true,
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('password')
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})