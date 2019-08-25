import React from 'react';



const Children = (props) => {
    return ( 
       
        <div>
            <h1>{props.childrenStatus.father}</h1>
            <h1>{props.childrenStatus.grandpa}</h1>
            <h1>{props.childrenStatus.grandson}</h1>
            {console.log(props)}
        </div>
    );
}
 
export default Children;