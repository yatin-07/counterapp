import React from 'react';
import { DefaultRootState } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions';
import { initialStateType } from './Reducers/counter';

function App() {
  const incCounters = useSelector((state: initialStateType) => state.inc);
  const dispatch = useDispatch();
  //console.log(DefaultRootState);
  return (
    <div className="App">
      <h1>Counter = {incCounters}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
    </div>
  );
}

export default App;
