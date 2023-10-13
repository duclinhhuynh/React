import React, {useEffect, useState} from 'react';
import './App.css';
import Person from './Person';
import FuncitionComponent from './FuncitionComponent';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count}</p>
        <button onClick={() => setCount(count+1)}>click me</button>
        <Person count = {count}/>
        <br/>
        <FuncitionComponent data={count}/>
      </header>
    </div>
  );
}

export default App;
