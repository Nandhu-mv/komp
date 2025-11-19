import React, { useState } from 'react'
import "./components/all.css"


function All() {

   const games = [
  { id : 0,name: "Anata", Studio: "Naed Rain", Price: null, rating: null, img : "Anata.png"},
  { id : 1,name: "Days Gone", Studio: "Bend Studio", Price: 1499, rating: 4.0, img : "DG.png" },
  { id : 2,name: "God of war 4", Studio: "Santa Monica Studio", Price: 999, rating: 4.8, img : "gow4.png" },
  { id : 3,name: "Grand Theft Auto 5", Studio: "Rockstar Games", Price: 1160, rating: 4.6, img : "GTA5.png" },
  { id : 4,name: "Hollow Knight", Studio: "Team Cherry", Price: 974, rating: 4.9, img : "Hollow.png" },
  { id : 5,name: "Valorant", Studio: "Riot", Price: 0, rating: 4.2, img : "Valo.png" }
];

  const handlegame=(i)=>{
    if (i === 5) {
      i = 0 
    }
    setgame(games[i+1]);
  }

  const handlegamedirect=(i)=>{
    setgame(games[i]);
  }


  const [game,setgame] = useState(games[1])

  const Star = ({rating}) => {
  const element = [];
  for (let i = 1; i <= rating; i++) {
    element.push(<span key={i}>★</span>);
  }
  return <h2>{element}</h2>;
};


  return (
    <>
        <div className="container">

          <div className="maincard">

              <img src={`/images/${game.img}`} alt="Game" />

              <h1>{game.name}</h1>
              <h2>{game.Studio}</h2>
              <h3>Price : {game.Price}Rs. &nbsp;&nbsp; {game.rating} <Star rating = {game.rating}/></h3>

          </div>

          <button onClick={()=>handlegame(game.id)}> NEXT</button>

          <div className="contain">
          {
            games.map((i)=>(

              <div className='card' key={i.id}>

              <img onClick={()=>handlegamedirect(i.id)} src={`/images/${i.img}`} alt="Game" />

              <h3>{i.name}</h3>

              </div>

                
            ))

          }

          </div>


          
        </div>
        

        

    </>
  )
}

export default All