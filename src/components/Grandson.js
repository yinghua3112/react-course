import React from 'react';



const Grandson = (props) => {
    return ( 
    <div>
       {console.log(props.grandsonStatus)}
        <h3>{props.grandsonStatus.father}</h3>
    </div>
    );
}
 
export default Grandson;