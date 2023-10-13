import React from "react";

class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {count : props.count}
        console.log('Person', this.state);
    }
    static getDerivedStateFromProps(props, state){
        return {count: props.count};
    }
    componentDidUpdate(){
        console.log('Person: component DidUpdate');
    }
    render(){
        return(
            <div>
                <span>From person {this.state.count}</span>
            </div>
        );
    }
}

export default Person