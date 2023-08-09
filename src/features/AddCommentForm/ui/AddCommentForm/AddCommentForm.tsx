import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm: FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.AddCommentForm, {}, [className]) }>

        </div>
    );
});

AddCommentForm.displayName = 'AddCommentForm';
