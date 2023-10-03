import React from 'react';
class Car extends React.Component {
    constructor(props){
        super (props);
        console.log("xe tôi là : ", props);
        this.state = {
            color : props.color,
            value : props.value,
        }
        console.log('this class', this);
        this.shoot = this.shoot.bind(this);
    }
    static getDerivedStateFromProps(props, state){
        return{ color: props.color};
    }
    shoot = () => {
        alert("Great Shot!");
        console.log('shoot this', this)
      }
    render ()  {
        return <h3 onClick={this.shoot} style ={{color: this.state.color, cursor: 'pointer'} }>hi{this.state.value}</h3>;
    }
}   
export default Car;