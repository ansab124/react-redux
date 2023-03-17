import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { decrement, increment, reset } from '../redux/actions';

const Counter = () => {
    const counter = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div className="app">
            <h1>Counter: {counter} </h1>
            <button className='btnStyle' onClick={() => handleIncrement()}>+</button>
            <button className='btnStyle' onClick={() => handleDecrement()}>-</button>
            <button className='btnStyle' onClick={() => handleReset()}>reset</button>

        </div>
    )
}

export default Counter
