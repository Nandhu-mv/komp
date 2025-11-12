import React from 'react'
import './Parent.css'

function EventOne() {
    const event1=()=> {
        alert("Button clicked")
    }
    const event2=()=>{
        alert("double clicked")
    }
    const event3=(name)=>{
        alert(`${name} Clicked the Button`)
    }
    const event4=()=>{
        alert("Input")
    }
    // const event5=()=>{
    //     alert("Hover")
    // }
    const event6=()=>{
        alert("Keydown")
    }
    
  return (
    <div className='container'>
        <div>

        <button onClick={event1}>Click</button>
        <button onDoubleClick={event2}> Double Click</button>
        {/* <button onClick={event1(name)}> Evokes at one</button> this will cause it to immediatly evoke the fuction as it loads  */}
        <button onClick={()=>event3("Nandhu")}> Click Here</button>
        <div style={{marginTop:"15px"}}>
        <input onChange={event4} />
        {/* <p onMouseOver={event5}>This is the paragraph ________________________________________________________________________________________________________</p> */}
        <input onKeyDown={event6} />
        </div>
        
        </div>
    </div>
  )
}

export default EventOne