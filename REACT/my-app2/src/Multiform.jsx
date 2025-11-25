import React from 'react'
import { useState } from 'react'
import "./form.css"

function Multiform() {


    const [inputs,setinputs] = useState({});

     const [show,setshow] = useState(false);


    const handlesubmit=(event)=>{
    
        event.preventDefault();

        console.log(inputs.firstname);
        

        if (inputs.firstname !== undefined ) {

        alert(` ${inputs.firstname}'s details have been submitted `)
        
        setTimeout(()=>{setshow((show)=>!show)},5000);
        
            
        }

        
        

    };

    const handlechange=(event)=>{

        const name = event.target.name;
        const value = event.target.value;

        setinputs({...inputs,[name] : value})
        
    }


  return (
    <div className='formpage'>
    <div >
        <form onSubmit={handlesubmit}>

            <label id='fullname' >
                FullName
            </label>
            <label htmlFor="firstname">
                Firstname
            </label>

            <input 
            type="text"
            name='firstname'
            id='lastname'
            value={inputs.firstname || ""}
            onChange={handlechange}
            />

            <label htmlFor="lastname">
                Lastname
            </label>

            <input 
            type="text"
            name='lastname'
            id='lastname'
            value={inputs.lastname || ""}
            onChange={handlechange}
            />

            <label  id='dob'>Date of birth : 

                <input 
                type="date"
                name='dob'
                id='dofb'
                value={inputs.dob || ""}
                onChange={handlechange}
                />

            </label>
            <label id='gender' >Gender : 


               <label> Male
                <input 
                type="radio"
                id='gball'
                name='gender'
                value="Male"
                checked={inputs.gender === "Male"}
                onChange={handlechange}
                />
                </label>

               <label> Female
                <input 
                type="radio"
                id='gball'
                name='gender'
                value="Female"
                checked={inputs.gender === "Female"}
                onChange={handlechange}
                />
                </label>

            </label>

            <input type="submit" id='subber' />

        </form>


        




    </div>
        {show && <div className='shower'>    
        <div className='contents'> <h1>Name : {inputs.firstname} {inputs.lastname}</h1> 
        <h2>Date of Birth : {inputs.dob}</h2>
        <h2>Gender : {inputs.gender}</h2>
        </div>
        </div>}
    </div>
  )
}

export default Multiform