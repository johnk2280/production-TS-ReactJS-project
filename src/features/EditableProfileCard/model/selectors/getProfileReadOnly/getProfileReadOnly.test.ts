import {StateSchema} from "app/providers/StoreProvider";
import {getProfileReadOnly} from "./getProfileReadOnly";


describe('getProfileReadOnly.test', () => {
    test('should return error', () => {

        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
    })
})