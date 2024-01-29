import { useState } from 'react';
import './App.css';

const App = () => {

  const name = "John";
  const isRegistered = false;

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => { setCount((prevCount) => prevCount - 1) }}>-</button>
      <h3>{count}</h3>
      <button onClick={() => { setCount((prevCount) => prevCount + 1) }}>+</button>
    </div>
  );
}

// Person Component
const Person = (props) => {

  return (
    <>
      <p>Name: {props['name'] ? props['name'] : 'Unknown'}</p>
      <p>Last Name: {props['lastName']}</p>
      <p>Age: {props['age']}</p>
    </>

  );
}

export default App;
