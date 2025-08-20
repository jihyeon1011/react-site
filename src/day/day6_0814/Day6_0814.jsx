import { useState } from 'react'
import Ex_memo3 from './comp_memo/Ex_memo3'
import Ex_memo1 from './comp_memo/Ex_memo1'
import Ex_memo2 from './comp_memo/Ex_memo2'
import '../../App.css'
import Ex_memo4 from './comp_memo/Ex_memo4'
import Ex_memo5 from './comp_memo/Ex_memo5'
import Ex_callback1 from './comp_callback/Ex_callback1'
import Ex_callback2 from './comp_callback/Ex_callback2'
import Ex_callback3 from './comp_callback/Ex_callback3'
import Ex_callback4 from './comp_callback/Ex_callback4'
import Ex_callback5 from './comp_callback/Ex_callback5'
import Ex_ref1 from './comp_useref/Ex_ref1'
import Ex_ref2 from './comp_useref/Ex_ref2'
import Ex_ref3 from './comp_useref/Ex_ref3'
import Ex_ref4 from './comp_useref/Ex_ref4'
import Ex_ref5 from './comp_useref/Ex_ref5'



function Day6_0814() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>---Ex_memo---</h2>
      <Ex_memo1 /> <hr />
      <Ex_memo2 /> <hr />
      <Ex_memo3 /> <hr />
      <Ex_memo4 /> <hr />
      <Ex_memo5 /> <hr />

      <h2>---Ex_callback---</h2>
      <Ex_callback1 /> <hr />
      <Ex_callback2 /> <hr />
      <Ex_callback3 /> <hr />
      <Ex_callback4 /> <hr />
      <Ex_callback5 /> <hr />

      <h2>---Ex_ref--</h2>
      <Ex_ref1 /> <hr />
      <Ex_ref2 /> <hr />
      <Ex_ref3 /> <hr />
      <Ex_ref4 /> <hr />
      <Ex_ref5 />
    </>
  )
}

export default Day6_0814
