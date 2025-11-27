import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

    const navdata =[
        {path: '/', display : 'Home'},
        {path: '/One', display : 'Q1'},
        {path: '/Two', display : 'Q2'}
    ];

  return (
    <div>
        <nav >

        <ul style={{display:"flex", gap: '20px'}}>
            {
                navdata.map((i,index)=>(
                    <li style={{listStyle:"none"}} key={index}>
                        <NavLink to={i.path}>
                            {i.display}
                        </NavLink>
                    </li>
                ))
            }
        </ul>

        </nav>


    </div>
  )
}

export default Nav