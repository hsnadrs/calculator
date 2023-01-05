
import './App.css';
import React, { useState } from 'react';
import { evaluate, round } from 'mathjs';



// general variables accessed by all functions
let typed=""; // to store or input string numbers and operation +/*-
let result = ""; // display resule of evaluate libray from mathjs

function App() {
  //let calcMap = [0,1,2,3,4,5,6,7,8,9,"+" , "-", "=" ,"/","*", "c"]; //displayed buttons
  let calcMap = [
    "c", "+-", "%", "/",
  7, 8, 9, "*",
  4, 5, 6, "-",
  1, 2, 3, "+",
  0, ".", "=",
  ];
  const [calcDisplay, setCalcDisplay] = React.useState ("");// update Display or showing every click
// function called on every click
  const handleClick =(clickedButton, index)=> {
   
    console.log(calcMap[index])
// if (=) clicked then 1-evaluate 2- show answer 3-reset all variables
if ( calcMap[index] == "=") {
  console.log(calcMap[index]);

  result = typed;
  //replace x with * which is accepted by Mathjs
  result.replace("x", "*");
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
    <div className="wrapper">
      <div className="screen">
    <p> {calcDisplay}</p>
    </div>
    <div className="buttonBox">
    

      {calcMap.flat().map ((calcMap, index) =>{
         return   <CalcButton key={index} label={calcMap} click={()=> handleClick (calcDisplay,  index)} /> 
         
      }
     
      )
    }
    
    {/* <input type="text" value={calcDisplay} readOnly /> */}
    </div>
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
