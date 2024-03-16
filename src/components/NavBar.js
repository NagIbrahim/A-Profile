import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

import "./navbar.css"

export function NavBar() {
    
  return (
      <div id='header'>
         
         <div>
         <Link id='h-left' to ="/home">
                Name
              </Link>
         </div>
          <div  id='h-right'>
          
          <Link  to ="/resume">
                Resume
             
              </Link>

              <Link  to ="/projects">
                Projects
             
             </Link>

             <Link  to ="/message">
              Contact me
             
             </Link>
          </div>
          <FontAwesomeIcon id="hamburger-menu" icon={faBars} />
         
      </div>
  )
}

 export default NavBar