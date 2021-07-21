import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from './Actions';
import counterReducer from './Reducers/counter';

function App() {
  const counters = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter = {counters}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
