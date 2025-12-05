import React from 'react'
import { useNavigate } from 'react-router-dom'
import './gb.css'

function Gamebox(gob) {

    const nav = useNavigate();

  return (
    <div className='gamebox'>

        <img src={`./${gob.gimg}`}   alt="wordle" />

        <h1>{gob.gname.toUpperCase()} </h1>

        <button className='Btn1' onClick={()=>nav(`./${gob.glink}`)}> {gob.gname}</button>



    </div>
  )
}

export default Gamebox