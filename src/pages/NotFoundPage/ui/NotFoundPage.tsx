import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { type FC } from 'react';
import { Page } from 'widgets/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {
        className
    } = props;

    const { t } = useTranslation();
    return (
        <Page className={ classNames(cls.NotFoundPage, {}, [className ?? '']) }>
            { t('Страница не найдена') }
        </Page>
    );
};
