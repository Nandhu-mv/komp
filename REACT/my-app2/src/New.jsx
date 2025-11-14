import React from 'react'
import { useNavigate } from 'react-router-dom'





function Home() {

    const nav = useNavigate()

  return (
    <div>Home

        <button onClick={()=>nav('/First')} > Click</button>
        


    </div>
    
  )
}

export default Home