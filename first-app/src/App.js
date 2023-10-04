import logo from './logo.svg';
import './App.css';
import Car from './Car';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Car color = 'red' value = 'xe cu toi'/>
          <MyForm/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
