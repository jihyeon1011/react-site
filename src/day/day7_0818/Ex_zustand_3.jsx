import React from 'react';
import { store_zustand } from './js/store_zustand';

const Ex_zustand_3 = () => {
    const {count, increment, decrement} = store_zustand()

    return (
        <>
            <p>카운트: {count}</p>
            <button onClick={increment}>
                ++1증가
            </button>
            <button onClick={decrement}>
                --1증가
            </button>
            
        </>
    );
};

export default Ex_zustand_3;

