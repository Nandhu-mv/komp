import React from 'react'

function Conditional3() {
    let num=-1
  return (
    <div>
        {num === 0? <h1>zero</h1> : num>0? <h1>positive</h1> : <h1>negative</h1>}</div>
  )
}

export default Conditional3