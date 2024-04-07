import React from 'react'
import { Link } from "react-router-dom"
import Form from "./Form/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./footer.css"

function Footer() {
  return (
    <div id="f" >
      {/*  kontakt info */}
      <div   id="f-left">  
        <div>         
        <p> Kontaktieren</p>    
          </div>  
          
        <div id="left-info">
          <div id="left-text">
          <p >Tel:+4966666666</p>
          <p>Email:info@gmail.com</p>
          </div>   
        <div  id="scoial">
           <span><FontAwesomeIcon icon={faFacebook} /></span>
          <span> 
          <Link  to ="https://github.com/" >
          <FontAwesomeIcon icon={faGithub }/ >
              </Link>
          
          </span>
          <span> 
             <Link  to ="https://www.linkedin.com/" >
             <FontAwesomeIcon icon={faLinkedin} /> 
             </Link>
           </span>   
          </div>
     
           <div id="f-bottom">
            {/* <p>  
              <Link>Impressum</Link>
              <Link>Datenschutz</Link>
              <Link>AGB</Link>
            </p>
             */}
            <p>
           <span>
            Made by  <span></span>
            <Link  to="https://www.linkedin.com/in/naglaa-h-0342b1250/">Naglaa</Link>      
           </span>

            </p>
           </div>           
        </div>  

    </div>
 {/* form */}
    <Form/>

   </div>
  )

}
export default Footer;
