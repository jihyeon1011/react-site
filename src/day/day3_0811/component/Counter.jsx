import { useState } from "react"

export default function Counter() {
    //훅 useState 사용하기
    //const [상수이름, 세터함수] = useState(초기값)
    const [count, setCount] = useState(0)

    return (
        <>
            <h3>Number값의 상태 변화 체크</h3>
            <h2>카운트: {count}</h2>
            {/* setCount(count+1) >>> count = count + 1 */}
            <button onClick={() => setCount(count + 1)}>1씩 ++증가</button>
            <button onClick={() => setCount(count - 1)}>1씩 --감소</button>
        </>
    )
}


// function Counter(){

// }
// export default Counter