import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class MaterialUI extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }

        
    }


    render() {
        const Test = () => (
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          );

        return (
            <Test />
        )
    }
}
