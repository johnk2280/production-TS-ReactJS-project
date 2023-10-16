import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';

export interface ProfileType {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
