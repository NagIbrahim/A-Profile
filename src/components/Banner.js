import React from 'react'
import { Link } from "react-router-dom"
import BanerImg from "../images/img1.webp";
import "./banner.css"

function Banner() {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={BanerImg} alt="img" />
        </div>
        <div className='about-right'>
        <div id="txt">

        <h3>Hello</h3>
       <h4>About me</h4>
       <div >
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
       Sed vestibulum tortor eu mauris aliquet, id congue nisi convallis. Duis id efficitur justo. Donec nec leo sit amet arcu auctor fermentum. Donec id mollis dui.
      </p>
       </div>

        </div>
     
       
      
       <div id="button-container">
      
       <Link to="/resume" id="resume">
          Resume
        </Link>
     
       <Link to="/projects" id="projects">
          Resume
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
