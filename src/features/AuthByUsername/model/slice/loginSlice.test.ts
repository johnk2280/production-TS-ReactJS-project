import {DeepPartial} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/loginSchema";
import {loginActions, loginReducer} from "./loginSlice";
import {StateSchema} from "app/providers/StoreProvider";

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: '123'};
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin')))
            .toBe({username: 'admin'});

    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: '123'};
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('qwerty')))
            .toBe({username: 'qwerty'});
    });
})