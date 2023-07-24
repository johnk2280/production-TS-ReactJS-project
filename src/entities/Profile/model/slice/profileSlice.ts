import { createSlice } from '@reduxjs/toolkit';
import type { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    error: undefined,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
