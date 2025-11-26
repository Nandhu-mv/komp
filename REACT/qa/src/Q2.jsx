import React from 'react'


// Question 4: 4 Marks
// Given the following array of cars:
// const cars = [
// { id : “car_1”, manufacturer : "BMW", modelYear : 2001},
// { id : “car_2”, manufacturer : "Audi", modelYear : 2005},
// { id : “car_3”, manufacturer : "BMW", modelYear : 2010},
// { id : “car_4”, manufacturer : "Toyota", modelYear : 2015}
// ];
// Task:
// Create a React component that:
// 1. Displays all cars in a list .
// 2. Displays only BMW cars in a separate list .
// 3. Uses conditional rendering to display "Older Car" for cars that are older than 2008.





function Q2() {

    const cars = [
{ id : 'car_1', manufacturer : "BMW", modelYear : 2001},
{ id : 'car_2', manufacturer : "Audi", modelYear : 2005},
{ id : 'car_3', manufacturer : "BMW", modelYear : 2010},
{ id : 'car_4', manufacturer : "Toyota", modelYear : 2015}
];



  return (
    <div>
        <h1>All Cars </h1>
        {
            cars.map((i)=>(
                
                <li key={i.id}> Car brand : {i.manufacturer} &nbsp;&nbsp;&nbsp;  ModelYear : {i.modelYear}</li>
            ))


        }
        <h1>BMW Cars </h1>
        {
            cars.map((i)=>(
                
                i.manufacturer === 'BMW' &&
                <li key={i.id}> Car brand : {i.manufacturer} &nbsp;&nbsp;&nbsp;  ModelYear : {i.modelYear}</li>
                ))


        }
        <h1>Cars Older than 2008</h1>
        {
            cars.map((i)=>(
                
                i.modelYear < 2008 &&
                <li key={i.id}> Car brand : {i.manufacturer} &nbsp;&nbsp;&nbsp;  ModelYear : {i.modelYear}</li>
                ))


        }



    </div>
  )
}

export default Q2