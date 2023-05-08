import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

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

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={ state }>
        <StoryComponent/>
    </StoreProvider>
);
