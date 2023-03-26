import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
            <input
                className={classNames(cls.input)}
                type={'text'}
            />
            <input
                className={classNames(cls.input)}
                type={'text'}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
