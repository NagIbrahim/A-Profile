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
      <div   id="f-container">
      <div   id="f-left">  
        <div>         
        <p id="kontakt">KONTAKT:</p>    
          </div>  

        <div id="left-info">
          <div id="left-text">
          <p >Tel:+4966666666</p>
          <p>Email:info@gmail.com</p>
          </div>  
          <div id="p-social">
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
         <div></div>
            
            
            
            </div> 
       
           <div id="f-bottom">
             <p id="rights">  
              All Rights Reserved
            </p>        
            <p id="p-info"> 
           <span>
            Made by  <span></span>
            <Link  to="https://www.linkedin.com/">Naglaa</Link>      
           </span>

            </p>
           </div>           
        </div>  

        
        
      
    
    </div >
 {/* form */}
  <div id="f-right">

  <Form/>
  
  </div>
    
        
      </div>

   </div>
  )

}
export default Footer;
