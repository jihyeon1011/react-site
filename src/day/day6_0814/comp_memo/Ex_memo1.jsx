import React, { useMemo, useState } from 'react';

const Ex_memo1 = () => {
    const [count, setCount] = useState(0);

    const double = useMemo(() => {
        console.log("✅double 값 계산 중...");
        return count * 2;
    }, [count]);
    return (
        <>
            <h3>count: {count}</h3>
            <p>double: {double}</p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
        </>
    );
};

export default Ex_memo1;