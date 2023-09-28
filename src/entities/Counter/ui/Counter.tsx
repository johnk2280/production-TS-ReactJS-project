import { type FC } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = (): void => {
        dispatch(counterActions.increment());
    };
    const decrement = (): void => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid={ 'value-title' }>
            <h1>{ counterValue }</h1>
            <Button
                data-testid={ 'increment-btn' }
                onClick={ increment }
            >
                { t('Увеличить') }
            </Button>
            <Button
                data-testid={ 'decrement-btn' }
                onClick={ decrement }
            >
                { t('Уменьшить') }
            </Button>

        </div>
    );
};
