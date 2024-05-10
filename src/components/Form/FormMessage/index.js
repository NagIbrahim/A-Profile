import React from 'react'
import "./style.css"

function FormMessage({message,setMessage }) {

  const handleChange = (event) => {
    const { value } = event.target;
    console.log("messagevalue:", message )
    setMessage(value);
   
  };


  return (
    <div id="form-message">
      <p className='p-form'>Enter your message</p>
      {/*<input id="input-message" type="textarea"    value={messageValue}
        onChange={handleChange}  placeholder='Enter your message'/>*/}
        <textarea id="input-message" name="freeform"    value={message}  placeholder='Enter your message' onChange={handleChange}                   >
          </textarea>
    </div>
  )
}

export default FormMessage
