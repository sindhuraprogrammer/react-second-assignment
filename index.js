import React, { Component } from 'react';
import { render } from 'react-dom';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './style.css';

class App extends Component {
  state={
    textLength : 0,
    items:[],
    charItems:[]
  }

calculateLengthHandler=(event)=>{
    const enteredText = event.target.value;
    this.setState(
      {textLength:enteredText.length}
    );
    const txtToArr = enteredText.split('');
    const listItems = txtToArr.map((el,index)=>{
        return <p key={ index }>{el}</p>
    });
    const newCharItems = txtToArr.map((el,index)=>{
        return <CharComponent style={divStyle} key={index} single={el} ></CharComponent> 
    });
    this.setState({
      items:listItems,
      charItems: newCharItems
    })
    };
    
render() {

 let displayMsg;
 this.state.textLength>=5 ? this.displayMsg="Text long enough" : this.displayMsg = "text is too short";

    return (
      <div>
        <input type="text" onChange={this.calculateLengthHandler} />  
        <ValidationComponent len={this.state.textLength}>{this.displayMsg}</ValidationComponent>   
        <CharComponent style={divStyle}   single= {this.state.items} ></CharComponent>  
       <div>{this.state.charItems}</div>
      </div>
    );
  }
}
const divStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    color:'red'
  };

render(<App />, document.getElementById('root'));
