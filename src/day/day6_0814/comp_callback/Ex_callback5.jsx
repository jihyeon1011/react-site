import React, { useCallback, useEffect, useState } from 'react';

const Ex_callback5 = () => {
    const [count, setCount] = useState(0);

    const handleKeyPress = useCallback((e) => {
        if (e.key === "ArrowUp") {
            setCount((prev) => prev +1);
        }
        else if (e.key === "ArrowDown") {
            setCount((prev) => prev -1);
        }
        else if (e.key === "ArrowLeft") {
            setCount((prev) => prev -1);
        }
        else if (e.key === "ArrowRight") {
            setCount((prev) => prev +1);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return() => {
            window.removeEventListener("keydown",handleKeyPress);
            console.log("나갔나?")
        };
    },[handleKeyPress]);

    return (
        <div>
            <p>ArrowUp 키를 눌러 증가</p>
            <p>Count: {count}</p>
        </div>
    );
};

export default Ex_callback5;