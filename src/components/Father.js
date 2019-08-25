import React from 'react';
import Children from './Children'


class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Children childrenStatus={this.props.fatherStatus}/> 
                {console.log(this.props)}
                {/* {this.props.fatherState.name} */}
            </div>
        );
    }
}
 
export default Father;