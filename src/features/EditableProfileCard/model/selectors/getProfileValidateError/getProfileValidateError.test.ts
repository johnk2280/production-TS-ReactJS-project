import {StateSchema} from "@/app/providers/StoreProvider";
import {getProfileValidateError} from "./getProfileValidateError";

import {ValidateProfileError} from "@/features/EditableProfileCard";


describe('getProfileValidateError.test', () => {
    test('should return error', () => {
        const validateErrorData: ValidateProfileError[] = [ValidateProfileError.SERVER_ERROR]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: validateErrorData
            }
        }
        expect(getProfileValidateError(state as StateSchema)).toEqual(validateErrorData)
    });

    test('should work wih empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined)
    })
})