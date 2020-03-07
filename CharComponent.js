import React from 'react';


const CharComponent = (props)=>{
  
  return(
    <div style={props.style}>
    <div>{props.single}</div>
    </div>
  );
}
export default CharComponent;