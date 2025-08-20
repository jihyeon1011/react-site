import '../../App.css'
import ColorChanger from './comp/ColorChanger'
import Counter from './comp/Counter'
import InputMirror from './comp/InputMirror'
import TodoList from './comp/TodoList'
import ToggleButton from './comp/ToggleButton'
import ExUseEffect01 from './comp2/ExUseEffect01'
import ExUseEffect02 from './comp2/ExUseEffect02'
import ExUseEffect03 from './comp2/ExUseEffect03'
import ExUseEffect04 from './comp2/ExUseEffect04'
import ExUseEffect05 from './comp2/ExUseEffect05'

function Day4_0812() {

  return (
    <>
    <h1>---useState---</h1><hr />
    {/* ---useState 01--- */}
     <Counter /><hr />
     <InputMirror /><hr />
     <ColorChanger /><hr />
     <ToggleButton/><hr />
     <TodoList /><hr />

     {/* ---useEffect 02--- */}
     <h1>---useEffect---</h1><hr />
     <ExUseEffect01 /><hr />
     <ExUseEffect02 /><hr />
     <ExUseEffect03 /><hr />
     <ExUseEffect04 /><hr />
     <ExUseEffect05 />
    </>
  )
}

export default Day4_0812
