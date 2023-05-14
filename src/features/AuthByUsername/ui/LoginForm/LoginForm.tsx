import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FC, type MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore();
    const { username, password, isLoading, error } = useSelector(getLoginState);

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
