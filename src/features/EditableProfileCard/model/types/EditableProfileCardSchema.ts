import { type ProfileType } from '@/entities/Profile';
import { type ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: ProfileType;
    form?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
