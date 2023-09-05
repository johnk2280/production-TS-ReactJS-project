import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { memo } from 'react';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.EditableProfileCard, {}, [className]) }>

        </div>
    );
});

EditableProfileCard.displayName = 'EditableProfileCard';
