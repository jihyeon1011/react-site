import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from './js/store_redux_slice';

const Ex_reduxTool_4 = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h3>리덕스</h3>
            <p></p>
            <h3>카운터: {count}</h3>
            <button onClick={() => dispatch(increment())}>++1</button>
            <button onClick={() => dispatch(decrement())}>--1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>++5</button>
        </>
    );
};

export default Ex_reduxTool_4;