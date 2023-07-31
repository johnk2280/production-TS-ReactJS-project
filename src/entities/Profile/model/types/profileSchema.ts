import type { Country, Currency } from 'shared/const/common';

export interface ProfileType {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
