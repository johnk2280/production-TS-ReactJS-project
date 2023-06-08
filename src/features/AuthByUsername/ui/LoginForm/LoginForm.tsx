import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FC, type MouseEvent, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);
        dispatch({ type: '@INIT loginForm reducer' });

        return () => {
            store.reducerManager.remove('loginForm');
            dispatch({ type: '@DESTROY loginForm reducer' });
        };
        // eslint-disable-next-line
    }, []);

    const onChangeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch((loginActions.setPassword(val)));
    }, [dispatch]);

    const onLoginClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={ classNames(cls.LoginForm, {}, [className ?? '']) }>
            <Text text={ t('Форма авторизации') }/>
            { error && <Text text={ error } theme={ TextTheme.ERROR }/> }
            <Input
                placeholder={ t('Введите логин') }
                className={ classNames(cls.input) }
                type={ 'text' }
                value={ username }
                onChange={ onChangeUsername }
            />
            <Input
                placeholder={ t('Введите пароль') }
                className={ classNames(cls.input) }
                type={ 'password' }
                value={ password }
                onChange={ onChangePassword }
            />
            <Button
                theme={ ButtonTheme.OUTLINE }
                className={ cls.loginBtn }
                onClick={ e => { onLoginClick(e); } }
                disabled={ isLoading }
            >
                { t('Войти') }
            </Button>
        </div>
    );
};

export default LoginForm;
