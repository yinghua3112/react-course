import React, { Component } from 'react';
import StatelessFile from './components/StatelessFile';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Account:{
                name: 'useracc',
                number: 123456789,
                amount: 2000,
                birthday: '1999-1-1',
                chequing: 5000,
                saving:  10000
            }   
        }
    }
    render() { 
        return (
            <div>
                <StatelessFile Account={this.state.Account}/>
            </div>
        );
    }
}
 
export default Account;