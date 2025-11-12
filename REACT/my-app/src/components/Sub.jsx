import React from 'react'
import './Child.css'
import './Parent.css'
import './ani.css'


function Sub(props) {
  return (
    <div className='container'>
        {
        props.data.map((item,index)=>(
            <div className='ccontainer' id='anim' key={index}>
            <div className='card'>
                <img src={item.image} alt={item.name} /> 
                <h2>Name : {item.name}</h2>
                <h3>Brand : {item.brand}</h3>
                <h3>Price : {item.price}</h3>


            </div>
            </div>
        ))  
        }
    </div>
  )
}

export default Sub