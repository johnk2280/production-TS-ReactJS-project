import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfileCardSchema } from '../types/EditableProfileCardSchema';

const initialState: EditableProfileCardSchema = {
    
};

export const EditableProfileCardSlice = createSlice({
    name: 'EditableProfileCard',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: EditableProfileCardActions } = EditableProfileCardSlice;
export const { reducer: EditableProfileCardReducer } = EditableProfileCardSlice;