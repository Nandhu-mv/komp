import React from 'react'
// import Project from './Project'
import Gamebox from './components/Gamebox'
import './Proj.css'

function Home() { 
  return (
    <>
        
        <nav> Reactivites </nav>

        <div className='container'>

            <Gamebox gob = {{name : 'wordle',link: 'wordle'}} />  
                
        </div>




        
    </>
  )
}

export default Home