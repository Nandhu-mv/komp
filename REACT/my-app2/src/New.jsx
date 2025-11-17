import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./components/New.css"





function Home() {

    const nav = useNavigate()

  return (
    <div>Home

        <button  onClick={()=>nav('/First')} > Click</button>
        


    </div>
    
  )
}

export default Home