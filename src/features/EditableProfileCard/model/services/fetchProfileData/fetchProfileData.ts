import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ProfileType } from '../../types/profileSchema';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        try {
            const response = await extra.api.get<ProfileType>(`/profile/${profileId}`);

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
