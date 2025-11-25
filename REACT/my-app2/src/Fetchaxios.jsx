import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Fetchaxi() {

    const [newdata,setnewdata] = useState([]);
    const [newerror,seterror] = useState(null);
    const [id,setid] = useState(1);

     const handleidchange =(e)=>{
        setid(e.target.value);
    }


    useEffect( ()=>{

        
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resposne => setnewdata(resposne.data))
        .catch(error => seterror(error))
    },[id])


   
  return (
    <>

        <h2 style={{marginTop:"100px"}}> GETS Automatically using Useeffect</h2>


        <label htmlFor="id">Enter the index of the title to fetch :</label>
        <input type="number" 
        id='id'
        value={id}
        onChange={handleidchange}
        />


        {newdata.map((i)=>(

            <h1 key={i.id}> {i.id == id &&  i.title}</h1>
            
        ))}

        <h2>Error Occured in AXI : {newerror}</h2>

    </>
  )
}

export default Fetchaxi