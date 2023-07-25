import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY)
    }
});
