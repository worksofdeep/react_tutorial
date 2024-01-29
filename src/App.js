import './App.css';

const App = () => {

  const name = "John";
  const isRegistered = false;

  return (
    <div className="App">
      <h3>Hello, {isRegistered ? name : 'Unknown'}!</h3>

      {name ? (<><p>Test Fragment</p></>) : <p>Test</p>}

      <Person name={'John'} lastName='Wick' age={30 + 5} />
      <Person />
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
