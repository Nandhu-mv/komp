import React from 'react';
import "./Parent.css";
import Child from './Child';
import gtr from './assets/GTR.png';
import kog from './assets/kogg.png';
import porshe from './assets/porshe911.png';
import bmw from './assets/bmw.png';
 

function P() {
  return (
    <div>

        <div className='container'>

        <Child name={"GTR R35"} brand="Nissan" price="₹2.12 crore" image ={gtr}/>
        <Child name={"M5"} brand="BMW" price="₹2.01 crore" image ={bmw}/>
        <Child name={"911"} brand="Porshe" price="₹2.0 crore" image ={porshe}/>
        <Child name={"Jesko"} brand="Koenigsegg" price="₹24 Crore" image ={kog}/>

        </div>


    </div>
  )
}

export default P