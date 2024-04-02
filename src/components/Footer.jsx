import React,{ useState} from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./footer.css"

function Footer() {
   
  // State variable to hold form input values
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };



  return (
    <div id="f" >
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
          <Link  to ="https://github.com/NagIbrahim" >
          <FontAwesomeIcon icon={faGithub }/ >
              </Link>
          
          </span>
          <span> 
             <Link  to ="https://www.linkedin.com/in/naglaa-h-0342b1250/" >
             <FontAwesomeIcon icon={faLinkedin} /> 
             </Link>
           </span>   
          </div>
           <div id="f-bottom">
           <p>
              <Link>Impressum</Link>
              <Link>Datenschutz</Link>
              <Link>AGB</Link>
            </p>
            
            <p>
           <span>
           © 2035 P & V Architekten. Erstellt mit 
            <Link>Name.com</Link>
           </span>
            </p>
           </div>           
        </div>  

    </div>
   {/* form*/}
   <div className="form-container">
      <p id="form-header">Contact me</p>
      <form onSubmit={handleSubmit} id="form">
        <div id="form-content">
        <div id="form-row">
          <div className="form-left">
            <p  className='f-label'>Enter your name</p>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-left">
            <p  className='f-label'>Enter your email</p>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>
        <div   id="message">
          <p >Enter your message</p>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}    
          />
        </div>
        </div>
      
        
        <button type="submit" id="send-button">
          Send
        </button>
      </form>
    </div>
   </div>
  )
}

export default Footer
