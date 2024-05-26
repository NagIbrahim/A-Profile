import React from 'react'
/*import CardImg from "../images/imgs1.jpg"*/
import "./card.css"

function Card({description,imageSrc,layout}) {
  return (
    <div   id="card"  className={` ${layout}`}>
        
      <div id="card-img" >
      <img src={imageSrc} alt="img" />
      </div>
      <div id="card-txt">
       
       <p>{description}</p>
       
      </div>
    </div>
  )
}

export default Card
