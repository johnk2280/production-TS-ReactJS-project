import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";

describe('getLoginUsername.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '',
                username: 'johnk',
                isLoading: false,
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('johnk')
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})