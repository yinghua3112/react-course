import React from 'react';
import Grandson from './Grandson'


const Children = (props) => {
    return ( 
       
        <div>
            <Grandson grandsonStatus={props.childrenStatus}/>
        </div>
    );
}
 
export default Children;