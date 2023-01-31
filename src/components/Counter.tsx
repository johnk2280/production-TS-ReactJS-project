import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {

    const [value, setValue] = useState(0);

    function increment () {
        setValue(value + 1);
    }

    function decrement () {
        setValue(value - 1)
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment} >increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;