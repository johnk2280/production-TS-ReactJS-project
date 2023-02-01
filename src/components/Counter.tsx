import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {

    const [value, setValue] = useState(0);

    function increment () {
        setValue(value + 1);
    }

    function decrement () {
        setValue(value - 1)
    }

    return (
        <div >
            <h1>{value}</h1>
            <button className={classes.btn} onClick={increment} >increment</button>
            <button className={classes.btn} onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;