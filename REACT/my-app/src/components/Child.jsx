import React from 'react'
import "./Child.css"

function C(props) {
  return (
    <div>
        <div className='ccontainer'>
            <div className='card' >
                <img src={props.image} alt={props.name} />
                <h2>{props.name}</h2>
                <h3>Brand :{props.brand}</h3>
                <h3>Price :{props.price}</h3>
            </div>
        </div>

    </div>
  )
}

export default C