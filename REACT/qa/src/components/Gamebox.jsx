import React from 'react'
import { useNavigate } from 'react-router-dom'

function Gamebox(gob) {

    const nav = useNavigate();

  return (
    <div className='gamebox'>

        <h1>{gob.name} </h1>

        <button onClick={nav(`./${gob.link}`)}> </button>



    </div>
  )
}

export default Gamebox