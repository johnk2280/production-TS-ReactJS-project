import { type User } from '@/entities/User';

export interface IComment {
    id: string;
    text: string;
    user: User;
}
