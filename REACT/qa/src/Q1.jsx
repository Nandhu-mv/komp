import React from 'react'

// Question 3: 4 Marks
// const products = [
// { name: "Laptop", price: 800, category: "electronics" },
// { name: "Shirt", price: 40, category: "fashion" },
// { name: "Phone", price: 600, category: "electronics" },
// { name: "Shoes", price: 120, category: "fashion" },
// { name: "TV", price: 1000, category: "electronics" },
// { name: "Book", price: 20, category: "education" }
// ];
// Task
// ● Filters only electronics products with price greater than 500
// ● Converts their names to uppercase
// ● Sorts them in descending order of price
// ● Returns an array of just the names

function Q1() {

    const products = [
    { name: "Laptop", price: 800, category: "electronics" },
    { name: "Shirt", price: 40, category: "fashion" },
    { name: "Phone", price: 600, category: "electronics" },
    { name: "Shoes", price: 120, category: "fashion" },
    { name: "TV", price: 1000, category: "electronics" },
    { name: "Book", price: 20, category: "education" }
    ];

    let temp = [];

    temp = products.filter(e=>e.price >= 500)

    temp = temp.sort((a,b)=>b.price - a.price)

    let tempnames = temp.map(e => e.name.toUpperCase())

    console.log(tempnames);
    


  return (
    <div>

        <h1> &nbsp;&nbsp;&nbsp; All products </h1>
        {   
          products.map((i,index)=>(

            <div key={index} style={{display: 'grid', gridTemplateColumns:'auto auto auto' , width:'400px', justifyItems:'center'}}>
            

            <h3>{i.name}</h3> <h3>{i.price}</h3> <h3>{i.category}</h3>
            </div>

          ))
        }

        <h2> Name sorted in descending order of price </h2>

        {
            tempnames.map((e,index) => (

                <h1 key={index}>{e}</h1>
            ))
        }


    </div>
  )
}

export default Q1