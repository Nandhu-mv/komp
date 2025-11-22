import React from 'react'
import { useState, useRef } from "react"


function Calc() {

    const ref = useRef(0);

    const [count, setcount] = useState(0);


    const refinc =()=>{

        ref.current += 1;

    }

    const inc=()=>{
        setcount(count + 1)
        
    }
    const dec=()=>{
        if (count > 0) {
            setcount(count - 1)
        }

    }
    const rst=()=>{
        setcount(0)
    }


  return (
    <div>
        <h1>Counter : {count}</h1>
        <h1>Ref counter : {ref.current} </h1>

        <button onClick={inc}>INCREASE</button>
        <button onClick={dec}>DECREASE</button>
        <button onClick={rst}>RESET</button>
        <button onClick={refinc}>REFINC</button>

    </div>
  )
}

export default Calc