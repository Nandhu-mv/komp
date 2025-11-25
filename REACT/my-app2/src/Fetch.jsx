import React, { useState } from 'react'

function Fetch() {

    const [newdata,setnewdata] = useState([]);
    const [newerror,seterror] = useState(null);

    const getdata = async ()=>{
        try {

            const a = 2

            if (a ) {
                
            }

            const newresponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            const response = await newresponse.json();

            setnewdata(response)
            
        } catch (error) {
            seterror(error)
            
        }
    }

  return (
    <>
        <button onClick={getdata} > Get Using Button</button>

        {newdata.map((i)=>(

            <h1 key={i.id}> {i.id === 1 &&  i.title}</h1>
            
        ))}

        <h2>Error Occured : {newerror}</h2>

    </>
  )
}

export default Fetch