import React from 'react';
class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: ''};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name of your is: ${this.state.username}`);
  }
  handleChange = (event) => {
    this.setState({ username: event.target.value});
  };

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your name</p>
            <input type='text' onChange={this.handleChange}></input>
            <input type="submit" />
        </form>
    );
  }

 
}

export default MyForm
