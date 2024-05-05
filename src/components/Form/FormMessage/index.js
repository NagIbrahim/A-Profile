import React , {useState} from 'react'
import "./style.css"

function FormMessage({ setMessage }) {

  const [messageValue, setMessageValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setMessageValue(value);
    console.log("messagevalue:", messageValue )
    setMessage(value);
   
  };




  return (
    <div id="form-message">
      <p>Enter your message</p>
      {/*<input id="input-message" type="textarea"    value={messageValue}
        onChange={handleChange}  placeholder='Enter your message'/>*/}
        <textarea id="input-message" name="freeform"    value={messageValue}  placeholder='Enter your message' onChange={handleChange}                   >
          </textarea>
    </div>
  )
}

export default FormMessage
