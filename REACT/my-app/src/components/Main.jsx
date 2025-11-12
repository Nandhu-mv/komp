import React from 'react'
import Sub from './Sub';
import './Parent.css'
import gtr from './assets/GTR.png';
import kog from './assets/kogg.png';
import porshe from './assets/porshe911.png';
import bmw from './assets/bmw.png';
 

function Main() {

    const cars = [

    { name:"GTR R35", brand : "Nissan", price :'₹2.12 crore' ,image:gtr},
    { name:"M5", brand : "BMW", price :'₹2.01 crore' ,image:bmw},
    { name:"911", brand : "Porshe", price :'₹2.0 crore' ,image:porshe},
    { name:"Jesko", brand : "Koenigsegg", price :'₹24 crore' ,image:kog}

    ]

  return (
    <div >
        <Sub data = {cars}/>
    </div>
  )
}

export default Main