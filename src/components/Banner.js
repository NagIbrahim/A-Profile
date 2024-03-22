import React from 'react'
import { Link } from "react-router-dom"
import BanerImg from "../images/ameer.jpg";
import "./banner.css"

function Banner() {
  return (
    <div className='about'>
    
     {/*  <div className='about-left'>
        <img src={BanerImg} alt="img" />
        </div> */}
        <img src={BanerImg} alt="img" />

        <div className='about-right'>
        <div id="txt">

        <h1>Hello</h1>
       <h4>About me</h4>
       <div >
      <p id="p-about">
      Driven web developer with 1 year freelance experience seeks role
at a diverse, results-oriented tech company. Passionate about technology's positive impact,
committed to clean code & collaboration. Eager to learn & contribute meaningfully
      </p>
       </div>

        </div> 
       <div id="button-container">
      
       <Link to="/resume" id="resume">
          Resume
        </Link>
     
       <Link to="/projects" id="projects">
          Projects
        </Link>
        
       <Link to="/contact" id="contact">
          Contact
        </Link>

      </div>
      </div>
      </div>
      
  
  )
}

export default Banner
