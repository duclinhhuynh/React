import logo from './logo.svg';
import './App.css';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="£"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Car color = 'red' value = 'xe cu toi'/>
        </a>

      </header>
    </div>
  );
}

export default App;
