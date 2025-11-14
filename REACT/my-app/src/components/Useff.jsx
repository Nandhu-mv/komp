import React, { useState } from 'react'
import { useEffect } from 'react'

function Useff() {

    const [count,setcount] = useState(0);

    // this useEffect has dependecy on the variable count thereby it runs each time there is a change in count 

    useEffect(()=>{
            const a = 10
            const b = 15
            const user = "Nandhu"
            console.log(`${user} the sum is ${a + b}`)
    
        },[count])
    const inc=()=>{
        setcount(count + 1)
    }

  return (
    <div> 
        <h2>{count}</h2>
        <button onClick={()=>inc()}> Increase</button>
    </div>
  )
}

export default Useff