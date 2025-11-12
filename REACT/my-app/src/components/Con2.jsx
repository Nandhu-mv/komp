
import React from 'react'

function ConditionIf2() {
    let num=0
    const Number=()=>{
        if (num===0){
            return(<h1>zero</h1>)
        }
        else if(num>0){
            return(<h1>positive number</h1>)
        }
        else{
            return(<h1>negative number</h1>)
        }
    }
  return (
    <div><Number /></div>
  )
}

export default ConditionIf2