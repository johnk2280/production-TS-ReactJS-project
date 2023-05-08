import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User } from 'entities/User/model';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                authData
            );

            if (response.data === null) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
