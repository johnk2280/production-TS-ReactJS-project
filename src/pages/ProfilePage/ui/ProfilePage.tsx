import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props;

    const { t } = useTranslation();

    return (
        <div className={ classNames('', {}, [className ?? '']) }>
            { t('Страница профиля') }
        </div>
    );
};

export default ProfilePage;
