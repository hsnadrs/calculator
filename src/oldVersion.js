
import './App.css';
import React, { useState } from 'react';
import { evaluate, round } from 'mathjs';



// general variables accessed by all functions
let typed=""; // to store or input string numbers and operation +/*-
let result = ""; // display resule of evaluate libray from mathjs

function App() {
  let calcMap = [0,1,2,3,4,5,6,7,8,9,"+" , "-", "=" ,"/","*", "c"]; //displayed buttons
  const [calcDisplay, setCalcDisplay] = React.useState ("");// update Display or showing every click
// function called on every click
  const handleClick =(clickedButton, index)=> {
   

// if (=) clicked then 1-evaluate 2- show answer 3-reset all variables
if ( calcMap[index] == "=") {
  
  result = typed;
  // evalute easily any string of math meaning MathJS must be installed
  result = evaluate (result);
  //reset the typed string to nothing
typed = "";
//update the screen with result
  setCalcDisplay(result);
}
// if (c) clicked clear all variables
if ( calcMap[index] == 'c') {
  //console.log("inside if", calcMap[index], typed, result);
  result = "";
  typed = "";
  //update the screen with cleared 
  setCalcDisplay(typed);
}
if (calcMap[index] != '=' && calcMap[index] != 'c'){
typed += calcMap[index];
setCalcDisplay(typed);
}
  }
  return (
    <div className="Buttons">

      {calcMap.map ((calcMap, index) =>{
         return   <CalcButton key={index} label={calcMap} click={()=> handleClick (calcDisplay,  index)} /> 
         
      }
     
      )
    }
    <p> {calcDisplay}</p>

    {/* <input type="text" value={calcDisplay} readOnly /> */}
    </div>
    
  );
}

const CalcButton = (props) => {
 
    return (
  <div >
     
  <button  onClick={ props.click } >{props.label} </button>
  </div>
  )
  
}
export default App;
// onclick add numer to the temporarly array then update the main array as it cant be update directly
// const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
// const [inputText, setInputText] = useState("");
// const handleAddNumber = () => {
//   let numberCopy = [...numbers];
//   numberCopy.push (numberCopy[numberCopy.length-1]+1)
//   setNumbers (numberCopy)
// }
//on click remove last element of temp array then update the original array as cant be directly updated
// const removeHandler = (index) => {
//   let numberCopy = [...numbers];
//   numberCopy.splice(index, 1)
//   setNumbers(numberCopy);
// }
//on keyboard click got all the pressed key information then we update the original text
// const changeHandler = (event) => {
//   console.log(event.target.value);
//   setInputText(event.target.value);
// }

    {/* {numbers.map((number, index) => {
      return <p key={index}>{number}</p>
    })}
    <button onClick={handleAddNumber}>Add Number</button> */}

    {/* {numbers.map((number, index) => {
      return <p key={index} onClick={() => removeHandler(index)}>{number}</p>
    })} */}

{/* <input type="text" onChange={changeHandler}></input>
    <h1>{inputText}</h1> */}
  