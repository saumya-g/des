import React from 'react';

 const Test2 = (props) => {
     console.log(props.arrayfromParent);
    return(
        <div>
        <button onClick={props.clickfunc}>{props.name}</button>
        <ul>
        {props.arrayfromParent.map((item, index) => {
            return <li key={index}>{item.name} index is {index}</li>
        })}
        </ul>
        </div>
    ) 
}

export default Test2;
