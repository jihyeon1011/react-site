import { Provider } from 'react-redux'
import '../../App.css'
import { store_redux } from './js/store_redux'
import Ex_reduxTool_4 from './Ex_reduxTool_4'
import Ex_cont_provider from './Ex_cont_Provider'
import Ex_context1 from './comp/Ex_context1'
import Ex_js_2 from './Ex_js_2'
import Ex_zustand_3 from './Ex_zustand_3'

function Day7_0818() {

  return (
    <>
      {/* <Context API /> */}
      <Ex_cont_provider >
        <Ex_context1 />
      </Ex_cont_provider >
      <hr />

      {/* 외부js */}
      <Ex_js_2 />
      <hr />

      {/* zustand 설치후 사용 */}
      <Ex_zustand_3 />
      <hr />

      {/* redux toolkit 설치후 사용 */}
      <Provider store={store_redux}>
        <Ex_reduxTool_4 />
      </Provider>

    </>
  )
}

export default Day7_0818
