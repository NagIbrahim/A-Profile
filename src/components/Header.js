import React from 'react'
import { Link } from "react-router-dom"

import "./header.css"

export function Header() {
    
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

         
      </div>
  )
}

 export default Header