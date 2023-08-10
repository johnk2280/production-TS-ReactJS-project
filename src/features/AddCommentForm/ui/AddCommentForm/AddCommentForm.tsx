import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getCommentFormError, getCommentFormText } from '../../model/selectors/getCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AddCommentFormProps {
    className?: string;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
    const {
        className = ''
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
                >
                    { t('Отправить') }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
