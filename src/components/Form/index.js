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
      <p id="form-title">Contact</p>
     <form id="form-inputs" >
     <div  id="inputs">
     <InputName setName={setName}  />
      <InputEmail  setEmail={setEmail} />
     </div>   
       <FormMessage setMessage={setMessage} />   
    </form>  
    <div id="form-btn">
    <button id="btn-send"  type="submit"  onClick={handleSubmit}>send</button>
    </div>
  
    </div>
  )
}

export default Form
