import React, { useState } from 'react'

function Form() {
  
    const [name,setname] = useState('');

    const handlesubmit =(event)=>{
      event.preventDefault();
      alert(`my name is ${name}`);
    }

    const handlenameing=(event)=>{

      setname(event.target.value)

    }
  
    return (
    <>
    
    <form action="" onSubmit={handlesubmit}>

        <label htmlFor='namer'>Name : </label>
        <input id='namer' onChange={handlenameing} value={name} type="text" placeholder='Enter your name...' />
        <input type="submit" />
        



    </form>
    
    </>
  )
}

export default Form