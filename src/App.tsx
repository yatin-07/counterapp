import React from 'react';
//import { DefaultRootState } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions';
import { initialStateType } from './Reducers/counter';
import Button from '@material-ui/core/Button';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


function App() {
  const incCounters = useSelector((state: initialStateType) => state.inc);
  const dispatch = useDispatch();
  //console.log(DefaultRootState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Redux Counter</h1>
        <h1>Counter = {incCounters}</h1>
        <div>
          <Button className="button"
            onClick={() => dispatch(increment())} 
            startIcon={<AddIcon/>}
            size = "large"
            variant="contained"
            color="primary"
          >
          </Button>
          <Button className="button" 
            onClick={() => dispatch(decrement())}
            startIcon={<RemoveIcon/>}
            size = "large"
            variant="contained"
            color="primary">
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
