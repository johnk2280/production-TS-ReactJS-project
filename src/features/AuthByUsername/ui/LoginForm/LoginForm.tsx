import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string): void => {
        console.log(val);
        setValue(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
            <Input
                className={classNames(cls.input)}
                type={'text'}
                value={value}
                onChange={onChange}
            />
            <Input
                className={classNames(cls.input)}
                type={'text'}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
