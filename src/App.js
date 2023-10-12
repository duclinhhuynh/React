import './App.css';
import About from './About';
// import Contact from './Contact';
import{
  BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Home from './Home';
import React from 'react';
import  ReactDOM  from 'react-dom';
// import Contact from './Contact';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
    };
    this.setStateHandler = this.setStateHandler.bind(this);
  }
  setStateHandler = () => {
    const item = 'setState...'
    const myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data: myArray});

  }
  forceUpdateHandler = () => {
    this.forceUpdate();
  }
  findDomNodeHandler = () => {
    const myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }
render() {
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
      <div>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>
      </div>
      <div>
        <button onClick={this.forceUpdateHandler}>SET STATE</button>
        <h4>number: {Math.random()}</h4>
      </div>
      <div>
        <button onClick={this.findDomNodeHandler}>Find</button>
        <div id='myDiv'>Node</div>
      </div>
      </header>
    </div>
  );
}
}

export default App;
