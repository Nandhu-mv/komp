import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Proj.css'

function Project() {

    const [word,setword] = useState('');

    const WORD_LIST_API_URL = 'http://localhost:5000/random-word';


    useEffect(()=>{

        const getwords = async ()=>{

            try {     
            const response = await axios.get(WORD_LIST_API_URL)
            console.log(response.data);
            const data = response.data.words;
            console.log(data);
                   

        } catch (error) {
            console.log(error);      
        }
        }
        getwords();
    },[])
   



  return (
    <div>

    </div>
  )
}

export default Project