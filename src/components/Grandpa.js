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

            </div>
        );
    }
}
 
export default Grandpa;