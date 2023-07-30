import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { type ReactNode } from 'react';
import { profileReducer } from 'entities/Profile';
import { type ReducerList } from 'shared/lib/components/DynamicModuleLoader';

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

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
    // eslint-disable-next-line react/display-name
) => (StoryComponent: Story): ReactNode => (
    <StoreProvider initialState={ state } asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }>
        <StoryComponent/>
    </StoreProvider>
);
