import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
    error: '',
    isLoading: false,
    password: '',
    username: ''
};

export const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                loginByUserName.pending,
                (state, action) => {
                    state.error = '';
                    state.isLoading = true;
                })
            .addCase(
                loginByUserName.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                })
            .addCase(
                loginByUserName.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                });
    }
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
