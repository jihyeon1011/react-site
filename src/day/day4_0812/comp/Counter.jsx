import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <>
        <h3>카운터 {count}</h3>
        <button onClick={() => setCount(count + 1)}>++1 증가</button>
        <button onClick={() => setCount(count-1)}>--1 감소</button>
        </>
    )
}