import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User/model';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
