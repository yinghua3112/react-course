import React from 'react';


const StatelessFile = (props) => {
    console.log(props);
    return ( 
        <div>
            {props.Account.name}<br></br>
            {props.Account.number}<br></br>
            {props.Account.amount}<br></br>
            {props.Account.birthday}<br></br>
            {props.Account.chequing}<br></br>
            {props.Account.saving}<br></br>
        </div>
    );
}
 
export default StatelessFile;