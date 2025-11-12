import React from 'react'
import img1 from "./assets/kaiju.png"
import img2 from "./assets/pika.jpg"
import img3 from "./assets/tou.png"
import "./img.css";

function Third() {
  return (
    <div style={{display: 'flex', }}>
        <img src = {img1} alt="Kaiju" />
        <img src = {img2} alt="Pika" />
        <img src = {img3} alt="To" />
    </div>
  )
}

export default Third