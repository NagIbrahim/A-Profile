import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

/*import CardImg from "../images/imgs1.jpg"*/
import "./card.css"

function Card({description1,description2,imageSrc,layout}) {
  return (
    <div   id="card"  className={` ${layout}`}>
        
      <div id="card-img" >
       {/*  <img src={imageSrc} alt="img" /> */ }
       <img src={imageSrc} alt="img" />
      </div>
      <div className="c-txt">
        <div className="txt-w">

        <div id="p1">
        <p>{description1}</p>
       </div>
       <div id="p2">
          <p>{description2}</p>
       </div>  
       <div id="b">
        <div id="t"></div>
       <div id="tools">
       <span><FaHtml5 className='icon' /></span>
       <span>  <FaCss3Alt className='icon' /> </span>   
       <span><IoLogoJavascript className='icon' /> </span>
       <span><BiLogoTypescript  className='icon' /></span>
       <span> <FaReact className='icon' /></span>

       </div>   

       </div>
      
        
        </div>
      
      </div>
    </div>
  )
}

export default Card
