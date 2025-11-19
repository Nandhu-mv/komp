import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./components/New.css"

import Form from './Form'





function Home() {

    const nav = useNavigate()

  return (
    <div>Home

        <button  onClick={()=>nav('/First')} > Click</button>
        
        <Form />

    </div>
    
  )
}

export default Home