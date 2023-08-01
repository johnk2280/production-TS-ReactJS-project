import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ProfileType } from '../../types/profileSchema';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<ProfileType, void | never, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const {
            dispatch,
            rejectWithValue,
            extra,
            getState
        } = thunkApi;

        // Два варианта получения состояния из редаксовского хранилища
        // const data = getState().profile?.form;
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<ProfileType>(
                '/profile',
                formData
            );
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
