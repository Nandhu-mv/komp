import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Proj.css'

function Project() {

    const [words,setwords] = useState([]);

    const [word,setword] = useState('HELLO');

    const Alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


    const [hint,sethint] = useState('')


    const [l1,setl1] = useState('');
    const [l2,setl2] = useState('');
    const [l3,setl3] = useState('');
    const [l4,setl4] = useState('');
    const [l5,setl5] = useState('');

    const [l1t,setl1t] = useState(false);
    const [l2t,setl2t] = useState(false);
    const [l3t,setl3t] = useState(false);
    const [l4t,setl4t] = useState(false);
    const [l5t,setl5t] = useState(false);

    const [win,setwin] = useState(false);

    useEffect (()=>{

      

    })


    useEffect(()=>{

        const getwords = async ()=>{

            try {     
            const response = await axios.get('http://localhost:5000/random-word')
            console.log(response.data);
            const data = response.data.words;
            console.log(data);
            setwords(data)
                   

        } catch (error) {
            console.log(error);      
        }
        }
        getwords();
    },[])

    const checkmatch =()=>{

        // check if won

      if (word === `${l1}${l2}${l3}${l4}${l5}`) {

        setwin(true);
        
        return        
      }
      
      // check if letter match and if in word smwhr

      if (word[0] === l1 ) {
        setl1t(true);        
      }
      else if(word.includes(l1)){
        if (l1 !== '') {
          sethint(hint=> hint + ` WORD HAS ${l1}   \n `)
        setl1('');
        }
      }
      else{
        setl1('');
      }
      if (word[1] === l2 ) {
        setl2t(true);        
      }
      else if(word.includes(l2)){
        if (l2 !== '') {
          sethint(hint=> hint + ` WORD HAS ${l2}   \n `)
          setl2('');
        }  
      }
      else{
        setl2('');
      }
      if (word[2] === l3 ) {
        setl3t(true);        
      }
      else if(word.includes(l3)){
        if (l3 !== '') {
          sethint(hint=> hint + ` WORD HAS ${l3}   \n `)
          setl3('');
        }  
      }
      else{
        setl3('');
      }
      if (word[3] === l4 ) {
        setl4t(true);        
      }
      else if(word.includes(l4)){
        if (l4 !== '') {
          sethint(hint=> hint + ` WORD HAS ${l4} \n `)
          setl4('');
        }
        
      }
      else{
        setl4('');
      }
      if (word[4] === l5 ) {
        setl5t(true);        
      }
      else if(word.includes(l5)){
        if (l5 !== '') {
          
        sethint(hint=> hint + ` WORD HAS ${l5}   `)
        
        setl5('');
      }
      }
      else{
        setl5('');
        console.log(hint);
        
      }




    }

    const start =()=>{

      setwin(false);

      sethint('');

      setl1t(false);
      setl2t(false);
      setl3t(false);
      setl4t(false);
      setl5t(false);

      setl1('');
      setl2('');
      setl3('');
      setl4('');
      setl5('');


      const  new_word = words[Math.floor(Math.random()*words.length)];
      setword(new_word.toUpperCase())
      console.log(new_word.toUpperCase());

    }

    const check =(l)=>{

      let flag = 0;
      for (let i = 0; i < 26; i++) {

        if (Alphabets[i] === l ) {

          flag = 1;
          break;
          
        }
      }
      if (flag) {

        flag = 0;
        return l
        
      }
      else{
        return ''
      }
    }
   



  return (

    <>

    <nav> Wordle</nav>


    <div className='all'>

      <button className='Btn' onClick={start}> Start</button>
      

      {win? 
      
      <div className='won'>
        <h1>YOU WON! 🎉</h1>
      </div>
      
      
      :(<>
      
      <div className="boxer">
      <div className={l1t?'boxg':'box'} tabIndex={0} onKeyDown={(e)=>{if (l1t) return;  setl1(()=>check(e.key.toUpperCase()))}}>{l1}</div>
      <div className={l2t?'boxg':'box'} tabIndex={1} onKeyDown={(e)=>{if (l2t) return;  setl2(()=>check(e.key.toUpperCase()))}}>{l2}</div>
      <div className={l3t?'boxg':'box'} tabIndex={2} onKeyDown={(e)=>{if (l3t) return;  setl3(()=>check(e.key.toUpperCase()))}}>{l3}</div>
      <div className={l4t?'boxg':'box'} tabIndex={3} onKeyDown={(e)=>{if (l4t) return;  setl4(()=>check(e.key.toUpperCase()))}}>{l4}</div>
      <div className={l5t?'boxg':'box'} tabIndex={4} onKeyDown={(e)=>{if (l5t) return;  setl5(()=>check(e.key.toUpperCase()))}}>{l5}</div>
      
      </div>

      <div className='hintbox'>
        <h2>HINTS :</h2>
        <h3>{hint}</h3></div>
  

      <button className="checkbox" onClick={checkmatch}> GO</button>
      
      </>
      )}


      



    </div>
    </>
  )
}

export default Project