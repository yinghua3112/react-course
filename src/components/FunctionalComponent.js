import React, { Component } from 'react';


const FunctionalComponent = (props) => {
    console.log(props);
    return ( 
        
        <div>
           {console.log(props)}
           {props.data.name}<br></br>
           {props.data.age}<br></br>
           {props.data.gender}<br></br>
           {props.data.address}<br></br>
           <br></br>
           {props.name}
        </div>);
}
 
export default FunctionalComponent;