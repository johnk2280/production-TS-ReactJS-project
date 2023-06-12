import { type StateSchema } from 'app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectVale: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
