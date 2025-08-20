import React, { useMemo, useState } from 'react';

function Child({ config }) {
    console.log("Child 렌더링");
    return <div>Theme: {config.theme}</div>;
}

const Ex_memo4 = () => {
    const [theme, setTheme] = useState("light");
    const [count, setCount] = useState(0);

    const config = useMemo(
        () => ({ theme }), [theme]);
    // 리턴 생략했을땐 이런식으로 소괄호로 묶어준..단일 리턴

    return (
        <>
            <Child config={config} />
            <button onClick={() =>
                setTheme(t => (t === "light" ? "dark" : "light"))}>
                테마 변경
            </button>
            <button onClick={() => setCount(c => c + 1)}>
                Count: {count}
            </button>
        </>
    );
};

export default Ex_memo4;