import React, { useState } from "react";


function Toggle() {
  const [isOn, setButOn] = useState(false)

  function handleClick(){
    setButOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return <button onClick={handleClick} style ={{background:color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
