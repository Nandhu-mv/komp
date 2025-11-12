import React from 'react'
import { useState } from "react"


function Name() {

    // const [name, setname] = useState("______________");

    const [name ,setname] = useState({

        firstname: "Spade",
        lastname: "470",
        email: "Spades@gmail.com"

    });


    // const nameing=()=>{
    //     setname("Nandhu")
        
    // }


  return (
    <div>
        <h1>Hi my name is </h1>
        {/* <button onClick={nameing}>Submit</button> */}


        <input value= {name.firstname}
                onChange={e=> {
                    setname({
                        ...name,
                        firstname: e.target.value
                    });
                }}
        />
        <input value= {name.lastname}
                onChange={e=> {
                    setname({
                        ...name,
                        lastname: e.target.value
                    });
                }}
        />
        <input value= {name.email}
                onChange={e=> {
                    setname({
                        ...name,
                        email: e.target.value
                    });
                }}
        />

        <h1> Hey my name is {name.firstname} {name.lastname} my email is {name.email}</h1>

    </div>
  )
}

export default Name