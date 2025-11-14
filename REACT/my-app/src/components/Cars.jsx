import React, { useEffect, useState } from 'react'
import gtr from './assets/GTR.png';
import kog from './assets/kogg.png';
import car1 from './assets/car.png';

function Cars() {

    //useeffect with empty dependency "[]" only runs once

    useEffect(()=>{

        const user = "Nandhu"
        console.log(user)

    },[])

    // use effect with no dependency run at every new change/action 
    // useEffect(()=>{

    //     const user = "Nandhu"
    //     console.log(user)

    // })

    // UseEffect with dependeency is shown in Useff.jsx 

    

    const [car,setcar] = useState({

        name : "",
        brand : "",
        image : car1


    });

    const changecar_gtr =()=>{

        setcar({
            ...car,
            name : "Name : GTR 35",
            brand : "Brand : Nissan",
            image : gtr

        });

    };

    const [newname,setnewname] = useState("")

    const [newbrand,setnewbrand] = useState("")

    const handlename =(naam)=>{
        setnewname(naam);
    }    
    const handlebrand =(brnd)=>{
        setnewbrand(brnd);
    }    

    const changecar_new =()=>{

        setcar({
            ...car,
            name : `Name : ${newname}`,
            brand : `Brand : ${newbrand}`,
            image : kog

        });
    };


  return (

    <div>
        <img style={{width:"400px"}} src={car.image} alt="car" />
        <h1> {car.name}</h1>
        <h2> {car.brand}</h2>

        <button onClick={changecar_gtr}> GTR</button>

        <button onClick={changecar_new}> Custom car</button>

        <form >
            <input placeholder='Name' onChange={(e)=>handlename(e.target.value)}/>
            <input placeholder='Brand' onChange={(e)=>handlebrand(e.target.value)} />
            
        </form>


    </div>
  )
}

export default Cars