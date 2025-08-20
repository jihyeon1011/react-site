import React from 'react';
import { useGlobal } from '../Ex_cont_Provider';

const Ex_context1 = () => {

    //useGlobal은 useContext로 만든 커스텀훅
    const {count, setCount} = useGlobal()
    return (
        <>
            <p>카운트 : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                ++1 증가
            </button>
        </>
    );
};

export default Ex_context1;