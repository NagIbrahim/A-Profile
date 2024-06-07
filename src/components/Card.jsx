import React from 'react'
/*import CardImg from "../images/imgs1.jpg"*/
import "./card.css"

function Card({description1,description2,imageSrc,layout}) {
  return (
    <div   id="card"  className={` ${layout}`}>
        
      <div id="card-img" >
       {/*  <img src={imageSrc} alt="img" /> */ }
     
      </div>
      <div className="c-txt">
        <div className="txt-w">

        <div id="p1">
        <p>{description1}</p>
       </div>
       <div id="p2">
          <p>{description2}</p>
       </div>  

        </div>
      
      </div>
    </div>
  )
}

export default Card
