import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { useTranslation } from 'react-i18next';

interface AdminPagePanelProps {
    className?: string;
}

const AdminPagePanel: FC<AdminPagePanelProps> = (props: AdminPagePanelProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('admin-panel');

    return (
        <Page className={ classNames('', {}, [className]) }>
            { t('Админка') }

        </Page>
    );
};

export default AdminPagePanel;
