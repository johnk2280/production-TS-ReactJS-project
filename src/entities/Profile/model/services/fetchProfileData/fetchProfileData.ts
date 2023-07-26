import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ProfileType } from '../../types/profileSchema';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<ProfileType, void | never, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { dispatch, rejectWithValue, extra, getState } = thunkApi;

        try {
            const response = await extra.api.get<ProfileType>('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
