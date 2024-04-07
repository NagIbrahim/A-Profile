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
      <input id="input-message" type="textarea"    value={messageValue}
        onChange={handleChange}  placeholder='Message'/>
    </div>
  )
}

export default FormMessage
