import React from 'react'

const Two = () => {

    let a = [1,2,3,4,5]
    const b  = " This is a Variable"



  return (
    <div style={{color: "azure", background: "black", width:" 200px",display:"flex", justifyContent: "center" }}>        
      {a}
      <div style={{color: "black", background: " orangered",marginLeft:"20px"}}>
        {b}
      </div>
    </div>
  )
}

export default Two
