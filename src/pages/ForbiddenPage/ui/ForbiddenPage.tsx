import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { useTranslation } from 'react-i18next';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = (props: ForbiddenPageProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation();

    return (
        <Page className={ classNames('', {}, [className]) }>
            { t('Доступ запрещен') }
        </Page>
    );
};

export default ForbiddenPage;
