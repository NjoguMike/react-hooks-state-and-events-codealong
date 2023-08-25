import React from "react";
import { useState } from "react";

function Toggle() {
const [click, setClick] = useState(false)

function handleCLick(){
  setClick(currentValue => !currentValue)
 
}

const color = click ? "red" : "white"

  return <button onClick={handleCLick} style={{background: color}} >{click ? "ON" : "OFF"}</button>;
}

export default Toggle;
