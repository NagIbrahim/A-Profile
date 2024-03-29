import React , { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

import "./navbar.css"

export function NavBar() {

        const [showMenu, setShowMenu] = useState(false);

        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };

        const closeMenu = () => {
          setShowMenu(false);
      };
  
    
  return (
      <div id='header'>
         
         <div id='h-left'>
          <div id="h">
      
          {/* <Link  to ="/home">
                 A
               </Link>*/}
          </div>
           <div>
           <Link id="h-n" to ="/home">
                  Ameer Alaswad
                </Link>

           </div>
            <div id="h-j">Web Developer</div>

            </div>
       
          <div  id='h-right'>
          
          <Link  to ="/resume"  className="v-line">
                Resume
             
              </Link>
              <div className='vertical-line'></div>

              <Link  to ="/projects" className="v-line">
                Projects
             
             </Link>
             <div className='vertical-line'></div>

             <Link  to ="/message">
              Contact me
             
             </Link>
          </div>
          <FontAwesomeIcon id="hamburger-menu" icon={showMenu ? faTimes : faBars} onClick={toggleMenu} />

          {showMenu && (
                <div id="mobile-menu-container">
                    <FontAwesomeIcon id="close-menu" icon={faTimes} onClick={toggleMenu} />
                    <div id="mobile-menu">
                        <Link to="/resume"  onClick={closeMenu}>CV</Link>
                        <Link to="/projects"  onClick={closeMenu}>Projects</Link>
                        <Link to="/message" onClick={closeMenu}>Contact me</Link>
                    </div>
                </div>
            )}
         
      </div>
  )
}

 export default NavBar