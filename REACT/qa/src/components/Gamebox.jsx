import React from 'react'
import { useNavigate } from 'react-router-dom'

function Gamebox(gob) {

    const nav = useNavigate();

  return (
    <div className='gamebox'>

        <img src={`{gob.gimg}`}   alt="wordle" />

        <h1>{gob.gname} </h1>

        <button onClick={()=>nav(`./${gob.glink}`)}> {gob.gname}</button>



    </div>
  )
}

export default Gamebox