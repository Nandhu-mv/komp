import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./components/main.css"


function New3() {

  const nav = useNavigate();

  const navlist = [
    {name : "Home", goto : "/"},
    {name : "First", goto : "/First" },
    { name : "Second", goto : "/Second"}
    
  ];


  return (
    <div>
        <nav className='naver'>
          {navlist.map((i,Index)=>(

            <li key={Index}> 
            <button onClick={()=>nav(i.goto)}>
              {i.name}
            </button>
            </li>
          )
        )}
          
        </nav>
        
    </div>
  )
}

export default New3