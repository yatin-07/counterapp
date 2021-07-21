import React from 'react';
import logo from './logo.svg';
import { useSelector } from 'react-redux';
import { increment } from './Actions';

function App() {
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
      <h1>counter = {counter}</h1>
    </div>
  );
}

export default App;
