import React from 'react'

function CondtionIf1() {
    let num=1
    const Number=()=>{
        if (num>0){
            return(<h1>positive number</h1>)
        }
        else{
            return(<h1>negative number</h1>)
        }
    }
  return (
    <div>
        <h1>conditonal part</h1>

        <Number />
    </div>
  )
}

export default CondtionIf1
