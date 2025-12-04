
// LINKS
import React from 'react'
import Project from './Project'
import { BrowserRouter as BR,Route,Routes } from 'react-router-dom'
import Home from './Home'

function Projhome() {
  return (
    <>

        <BR>
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/wordle' element= {<Project />}  />

        </Routes>
        </BR>

    </>
  )
}

export default Projhome