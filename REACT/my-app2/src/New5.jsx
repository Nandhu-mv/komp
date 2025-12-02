// check email

import React from 'react'
import { useState } from 'react';

function New5() {

    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [error,seterror] = useState('');


    const handlesubmit =(e)=>{

        e.preventDefault()


        if (!email.includes('@') || !email.includes('.')) {
            seterror('Incorrect Email format.');
            console.log(error);
            
            return;
        }

        seterror('')

        setname('OK')
        setemail('OK')



    }





    const handlename =(e)=>{

        setname(e.target.value)
    }
    const handlemail =(e)=>{

        setemail(e.target.value)
    }
    





  return (
    <>

            <form className='form1' onSubmit={handlesubmit}>

                    <label > Name :
                        <input type="text"
                        value={name}
                        placeholder='Enter thy name'
                        onChange={handlename}
                        />

                    </label>
                    <label > Email :
                        <input type="text"
                        value={email}
                        placeholder='Enter thy email'
                        onChange={handlemail}
                        />

                    </label>

                    <input type="submit" 
                    value={'SUBMIT'}
                    />

            </form>

    </>
  );
}

export default New5