import './App.css';
import About from './About';
// import Contact from './Contact';
import{
  BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Home from './Home';
// import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      		<div>
        		<nav>
          			<ul>
            			<li>
                    <p>Hello</p>
              				<Link to="/">Home</Link>
            			</li>
            			<li>
              				{/* <Link to="/contact">Contact</Link> */}
            			</li>
                  <li>
              				<Link to="/about">About</Link>
            			</li>
          			</ul>
        		</nav>

        		<Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route  exact path='/about'>
                <About/>
              </Route>
            </Switch>
      		</div>
    	</Router>
      </header>
    </div>
  );
}

export default App;
