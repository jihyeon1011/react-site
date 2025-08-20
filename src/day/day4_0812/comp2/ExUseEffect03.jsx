import React, { useEffect, useState } from 'react';

const ExUseEffect03 = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(
            () => {
                setSeconds(seconds + 1)
            }, 1000)

        return () => {
            clearInterval(timer)
            console.log("타이머 종료")
        }

    },[])

    return (
        <div>
            <h3>{seconds} 초 경과</h3>
        </div>
    );
};

export default ExUseEffect03;