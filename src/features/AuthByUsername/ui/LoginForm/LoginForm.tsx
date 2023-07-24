import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FC, type MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
};

const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        className,
        onSuccess
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch((loginActions.setPassword(val)));
    }, [dispatch]);

    const onLoginClick = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={ initialReducers }
            removeAfterUnmount={ true }
        >
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
                    onClick={ async e => { await onLoginClick(e); } }
                    disabled={ isLoading }
                >
                    { t('Войти') }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
