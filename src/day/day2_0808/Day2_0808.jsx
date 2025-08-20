import '../../App.css'
import RenoCars from './components/RenoCars'
import Boxlist from './components/Boxlist'
import ConfirmDialog from './components/confirmDialog'
import { useState } from 'react'

import Book from './components/Book'
import Library from './components/library'


function Day2_0808() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <RenoCars></RenoCars><hr />
     <Book></Book><hr />
     <Library></Library><hr />
     <ConfirmDialog></ConfirmDialog><hr />
     <Boxlist></Boxlist>
    </>
  )
}

export default Day2_0808
