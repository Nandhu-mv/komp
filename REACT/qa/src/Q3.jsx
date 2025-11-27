import React, { useEffect, useState } from 'react'
import './Q3.css'

// Question 5: 5 Marks
// Task:
// Build a React component that:
// 1. Fetches a list of products from “https://fakestoreapi.com/products”.
// 2. Displays the products in a table with columns: id, title, price, and a “View” eye icon in
// the last column.
// 3. When the eye icon is clicked:
// o Redirect to a detail page (/product/:id).
// o Display the product’s: image, title, description, price, and category.


function Q3() {

    const [products,setProducts] = useState([]);
    const [alltab,setalltab] = useState (true);
    const [currentitem,setitem] = useState (null);

    const handleclick = (itemno)=>{

        setalltab((alltab => !alltab));
        setitem(itemno);

    }

    useEffect(()=>{

        const getter = async ()=>{

            try {
                
                const getdata = await fetch('https://fakestoreapi.com/products');
                const response = await getdata.json();

                setProducts(response);
            } catch (error) {

                console.log(error);
                    
            }

        }
        getter(); 
        
    },[])

    console.log(products);
    

  return (
    <>
        <nav>
            
        </nav>

    { alltab &&
    <div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>View</th>
            </tr>
            </thead>
            <tbody>
        {
            
            products.map((i)=>(

                <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.title}</td>
                    <td>{i.price}</td>
                    <td><img src={i.image} alt="imger" />
                        <button className='eye' onClick={()=>handleclick(i)}><i className="fa-solid fa-eye"></i></button>
                        </td>
                </tr>

                
            ))
        }
        </tbody>
        </table>
        
    </div>}

        {
            !alltab && 
            <div className='detail'>
                
                <img src={currentitem.image} alt="imaageeeee" />
                <h1> {currentitem.title}</h1>
                <p>Description : {currentitem.description}</p>
                <h3>price: {currentitem.price} | category: {currentitem.category}</h3>

                <button onClick={()=>handleclick(0)}>Go back</button>


            </div>


        }

    

    </>
  )
}





export default Q3