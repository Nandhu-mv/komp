import React from 'react'
import { useContext,createContext } from 'react'

const TextContext = createContext();

function New2() {

  const text = "!@#$%^UseContext!@#$%^&*"

  return (
    <div>
        <TextContext.Provider value={text}>

        <h1>This is {text}</h1>

        <Temp1 />

        </TextContext.Provider>
        </div>
  )
}

function Temp1() {
  return(
    <div>
      <h2> This is the second one without Context </h2>
      <Temp2/>
    </div>
  )
  
}

function Temp2() {
  const text = useContext(TextContext)

  return(

    <h3>This is the Child component with Context and the context is {text}</h3>
    
  )
  
}

export default New2