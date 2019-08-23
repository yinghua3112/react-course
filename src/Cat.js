import React , { Component }  from 'react';
import Stateless from './components/Stateless';

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cat:  {
                name: 'Charlie',
                age: 5,
                gender: 'male',
                address: 'Canada'
            }
         }
    }
    render() { 
        return ( 
            <div>
                <Stateless cat={this.state.cat} />
            </div> 
        );
    }
}
 
export default Cat;