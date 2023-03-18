import { type FC } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = (props) => {
    const { className } = props
    const dispatch = useDispatch()
    const counterValue = useSelector(state => state)

    const increment = (): void => {
        dispatch(counterActions.increment())
    }
    const decrement = (): void => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>value = {counterValue}</h1>
            <Button
                onClick={increment}
            >
                Increment
            </Button>
            <Button
                onClick={decrement}
            >
                Decrement
            </Button>

        </div>
    )
}
