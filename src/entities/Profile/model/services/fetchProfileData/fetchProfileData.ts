import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ProfileType } from '../../types/profileSchema';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<ProfileType, void | never, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { dispatch, rejectWithValue, extra, getState } = thunkApi;

        try {
            const response = await extra.api.get<ProfileType>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            let message: string = '';
            if (e instanceof Error) {
                message = e.message;
            }
            return rejectWithValue(message);
        }
    }
);
