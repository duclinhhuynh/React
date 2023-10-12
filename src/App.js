import './App.css';
import React from 'react';
import Person from './Person'

// import Contact from './Contact';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      peopleUnder50: [], peopleAbove50: []
    };
  }
  getData = () => {
    console.log('getData');
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(
        (result) => {
        console.log('result', result.results);
        const peopleUnder50 = result.results.filter(person => person.dob.age < 50)
        const peopleAbove50 = result.results.filter(person => person.dob.age > 50)
          this.setState({
            peopleUnder50,
            peopleAbove50,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('error',error);
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )
  }
render() {
  return (
    <div className="App">
      <button onClick={() => this.getData()}>Lay du leu</button>
      <div className='Mybox'>
        {
          this.state.peopleUnder50.map((value, index)=> {
            // eslint-disable-next-line react/jsx-no-undef
            return <Person key={index} data={value}/>
          })
        }
      </div>
      <div className='Mybox'>
        {
          this.state.peopleAbove50.map((value, index)=> {
            // eslint-disable-next-line react/jsx-no-undef
            return <Person key={index} data={value}/>
          })
        }
      </div>
    </div>
  );
}
}

export default App;
