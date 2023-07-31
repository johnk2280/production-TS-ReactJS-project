import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.ProfilePageHeader, {}, [className]) }>

        </div>
    );
};
