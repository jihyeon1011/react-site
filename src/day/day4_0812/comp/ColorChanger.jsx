import { useState } from "react"

export default function ColorChanger() {
    const [color, setColor] = useState("pink")
    return (
        <>
            <h3 style={{color}}>색상 변경</h3>
            <button onClick={() => setColor("red")}>빨강</button>
            <button onClick={() => setColor("yellow")}>노랑</button>
            <button onClick={() => setColor("green")}>초록</button>
        </>
    )
}