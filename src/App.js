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
      data2:'',
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
  updateState = (e) => {
    this.setState({data2: e.target.value});
  }
  clearInput = () => {
    this.setState({ data2: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
render() {
  return (
    <div className="App">
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
      <input
        value={this.state.data2}
        onChange={this.updateState}
        ref='myInput'
      >
      </input>
      <button onClick={this.clearInput}>Clear</button>
      <h4>{this.state.data}</h4>
    </div>
  );
}
}

export default App;
