import React from 'react';


const Stateless = (props) => {
    console.log(props)
    return(
        <div>
            {props.cat.name}<br></br>
            {props.cat.age}<br></br>
            {props.cat.gender}<br></br>
            {props.cat.address}<br></br><br></br>
            {props.name}
        </div>
    )
}

export default Stateless;