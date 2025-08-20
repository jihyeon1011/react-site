import React, { useState } from 'react';
import { store_public } from './js/store_public';

const Ex_js_2 = () => {
    //useState(외부 js에 있는 count를 사용)
    const [count, setCount] = useState(store_public.count)

    const handleClick = () => {
        //외부 js에 있는 메소드(increment) 사용
        store_public.increment();
        //강제로 렌더링
        setCount(store_public.count);

    }

    return (
        <>
            <p>카운트: {count}</p>
            <button onClick={handleClick}>
                ++1증가
            </button>
        </>
    );
};

export default Ex_js_2;