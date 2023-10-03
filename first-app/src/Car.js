import React from 'react';
class Car extends React.Component {
    constructor(props){
        super (props);
        console.log("xe tôi là : ", props);
        this.state = {
            color : props.color,
            value : props.value,
        }
    }
    render ()  {
        return <h3 style ={{color: this.state.color}}>hi{this.state.value}</h3>;
    }
}   
export default Car;