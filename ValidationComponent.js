import React from 'react';
const ValidationComponent = (props)=>{
  return(
    <div className="UserOutput">
    <p> Length of the entered Text is {props.len} </p>
    <p>{props.children}</p>
    </div>
  );
}
export default ValidationComponent;