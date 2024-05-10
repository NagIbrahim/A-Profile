import React , { useState }  from 'react'
/*import FormInput from './FormInput/index'*/
import  InputEmail from "./FormInput/InputEmail/index";
import  InputName  from "./FormInput/InputName/index";
import FormMessage from './FormMessage/index'
import "./style.css"

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields after submission
    setEmail('');
    setName('');
    setMessage('');
  
  };


  return (
    <div id="form-container">
      <p id="form-title">CONTACT:</p>
     <form id="form-inputs" >
     <div  id="inputs">
     <InputName setName={setName} name={name}  />
      <InputEmail  setEmail={setEmail} email={email}/>
     </div>   
       <FormMessage setMessage={setMessage} message={message} />   
    </form>  
    <div id="form-btn">
    <button id="btn-send"  type="submit"  onClick={handleSubmit}>send</button>
    </div>
    

        <div  id='all-rights' >
             <p >  
              All Rights Reserved
            </p>        
            <p >       
            Made by Naglaa
            </p>
           </div>           
  
    </div>
  )
}

export default Form
