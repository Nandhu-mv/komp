import React from 'react'
import { useNavigate } from 'react-router-dom';


function New1() {

  const nav = useNavigate();

  const text = "PropsDrilling"

  return (
    <div>
        
        <button onClick={()=>nav("/Second")}> Go to 2</button>

        <h1> {`Hello user this is ${text}`}</h1>

        <Temp1 text= {text} />
    </div>
  );
}

function Temp1(props) {

  return(
    <div>


        <h2>func1 : {props.text}</h2>
        <Temp2 text = {props.text} />

    </div>
  )
}
function Temp2(props) {
  return(
    <div>func2 : {props.text}</div>
  )
  
}

export default New1