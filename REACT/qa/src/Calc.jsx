import React, { useState } from 'react'
import './Calc.css'

function Calc() {


  const [exp,setexp] = useState('')

  const handleclick=(e)=>{
    if(e === 'clear'){
      setexp('')
    }
    else{
    setexp(exp+e)
    }
  }

  const handle_eq =()=>{

    try {
      
      const result = eval(exp)

      setexp(result)

    } catch (error) {
      
      console.log("Invalid operation ");
      
    }

  }




  return (
    <div className='calc'>


        <div className='calcontain'>
          <div className="display">
              <input type="text"
              value={exp}
              />
          </div>
          <div className="row">
            <button onClick={()=>handleclick('1')} >1</button>
            <button onClick={()=>handleclick('2')} >2</button>
            <button onClick={()=>handleclick('3')} >3</button>
            <button onClick={()=>handleclick('+')} >+</button>
          </div>
          <div className="row">
            <button onClick={()=>handleclick('4')} >4</button>
            <button onClick={()=>handleclick('5')} >5</button>
            <button onClick={()=>handleclick('6')} >6</button>
            <button onClick={()=>handleclick('-')} >-</button>
          </div>
          <div className="row">
            <button onClick={()=>handleclick('7')} >7</button>
            <button onClick={()=>handleclick('8')} >8</button>
            <button onClick={()=>handleclick('9')} >9</button>
            <button onClick={()=>handleclick('*')} >*</button>
          </div>
          <div className="row">
            <button onClick={()=>handleclick('0')} >0</button>
            <button onClick={()=>handleclick('/')} >/</button>
            <button onClick={()=>handleclick('clear')} >C</button>
            <button onClick={()=>handle_eq()} >=</button>
          </div>
        </div>



    </div>
  )
}

export default Calc