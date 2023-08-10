import { useTranslation } from 'react-i18next';
import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getCommentFormError, getCommentFormText } from '../../model/selectors/getCommentForm';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment?: () => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
    const {
        className = '',
        onSendComment
    } = props;
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);

    const onCommentTextChange = useCallback((val: string) => {
        dispatch(addCommentFormActions.setText(val));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={ reducers } >
            <div className={ classNames(cls.AddCommentForm, {}, [className]) }>
                <Input
                    className={ cls.input }
                    placeholder={ t('Введите комментарий') }
                    value={ text }
                    onChange={ onCommentTextChange }
                />
                <Button
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onSendComment }
                >
                    { t('Отправить') }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
