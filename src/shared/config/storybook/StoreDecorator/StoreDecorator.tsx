import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { type ReactNode } from 'react';

// export const StoreDecorator = (state: StateSchema): ReactNode => {
//     const inner = (StoryComponent: Story): ReactNode => {
//         return (
//             <StoreProvider initialState={ state }>
//                 <StoryComponent/>
//             </StoreProvider>
//         );
//     };
//
//     return inner;
// };

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    // eslint-disable-next-line react/display-name
) => (StoryComponent: Story): ReactNode => (
    <StoreProvider initialState={ state } asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }>
        <StoryComponent/>
    </StoreProvider>
);
