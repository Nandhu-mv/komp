import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./two.css"

function Two() {


  const [products,setProducts] = useState([]);
  const [show,setshow] = useState(false);


  const [item,setitem] = useState(0);

  const fetch = async ()=>{

      try {
        
      const res = await axios.get("https://fakestoreapi.com/products")
      setProducts(res.data)
      console.log(res.data);
      
        
      } catch (error) {

        console.log(error);
        
        
      }
  }

  const view = (i) =>{

    setitem(i);
    setshow(true);

  }




  useEffect(()=>{

   fetch(); 

  },[])




  return (
    <>

      {show && <div>

          <h1>Product Details</h1>

          {
            products.map((i)=>(

              item === i.id &&
              <div>
                <h3>{i.title}</h3>
                <h3>{i.price}</h3>
                <h3>{i.category}</h3>
                <img src={i.image} alt="" />
              </div>
              
            
              
            ))
              
            
          }



        <button onClick={()=>setshow(false)} > Back</button>
        </div>}


        {!show &&
    <table>
      <thead>
        <tr>
        <th> ID</th>
        <th> Title</th>
        <th> Price</th>
        <th> Category</th>
        <th> View </th>
        </tr>
      </thead>

      <tbody>
          {products.map((i)=>(

            <tr key={i.id} >
            <td>{i.id}</td>
            <td>{i.title}</td>
            <td>{i.price}</td>
            <td>{i.category}</td>
            <td>
              <button onClick={()=>view(i.id)} > View</button>
            </td>
            </tr>

          ))}

      </tbody>
      
    </table>

     }
    </>
  )
}

export default Two