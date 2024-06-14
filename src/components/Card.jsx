import React from 'react'
import { Link } from "react-router-dom"
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import "./card.css"

function Card({description1,description2,title,demo, glink,imageSrc,layout}) {
  return (
    <div   id="card"  className={` ${layout}`}>
        
      <div id="card-img" >
    
      {/*<div  id="project-title"><p>{title}</p></div> */}                                       

       <img src={imageSrc} alt="img" />
      
      </div>
      <div className="c-txt">
       
       {/*    <div className="txt-w">
        <div id="p1">
        <p>Project Title : {title}</p>
       </div>
       <div id="p2">
          <p>{description1}</p>
       </div>  

       </div> */}
       <div id="txt-container">

       <div id="p1">
        <p>Project Title: {title}</p>
       </div>
       <div  id="des"><p>Project Description:</p></div>
       <div id="p2">
          <p>{description1}</p>
       </div>  

       
        
      

       </div>

        
       <div id="tools">
       <span><FaHtml5 className='icon' /></span>
       <span>  <FaCss3Alt className='icon' /> </span>   
       <span><IoLogoJavascript className='icon' /> </span>
       <span><BiLogoTypescript  className='icon' /></span>
       <span> <FaReact className='icon' /></span>

       </div>  

       <div id="demo">
       <Link  to={demo}>Demo</Link>
       <Link  to={glink}>Github</Link>
        </div>
 



        </div>
      
      </div>
    
  )
}

export default Card
