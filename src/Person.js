import React from "react";

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data}
    }

    render() {
        return(
            <div>
                <span>name:{this.state.data.name.first}</span>
                <span>age:{this.state.data.dob.age}</span>
                <span>gender:{this.state.data.gender}</span>

            </div>
        );
    }
}
export default Person