import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'features/EditableProfileCard';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';
import { type ProfileType } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<
ProfileType,
void | never,
ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (profileId, thunkApi) => {
        const {
            dispatch,
            rejectWithValue,
            extra,
            getState
        } = thunkApi;

        // Два варианта получения состояния из редаксовского хранилища
        // const data = getState().profile?.form;
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length > 0) {
            return rejectWithValue(errors);
        }

        try {
            if (formData?.id) {
                const response = await extra.api.put<ProfileType>(
                    `/profile/${formData?.id}`,
                    formData
                );

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            }

            return rejectWithValue([ValidateProfileError.NO_DATA]);
        } catch (e) {
            let message: string = '';
            if (e instanceof Error) {
                message = e.message;
            }
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
