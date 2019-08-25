import React from 'react';
import Father from './Father'

class Grandpa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Father 
                // childrenState = {this.props.fatherState}
                fatherStatus ={this.props.grandpaStatus}/>
                <h1>{this.props.fatherState.name}</h1>
            </div>
        );
    }
}
 
export default Grandpa;