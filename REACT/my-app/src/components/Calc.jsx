import React from 'react'
import { useState } from "react"


function Calc() {

    const [count, setcount] = useState(0);

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

        <button onClick={inc}>INCREASE</button>
        <button onClick={dec}>DECREASE</button>
        <button onClick={rst}>RESET</button>

    </div>
  )
}

export default Calc