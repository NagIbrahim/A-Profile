import React , {useState, useEffect} from 'react'
import "./style.css"


function InputEmail({ setEmail }) {

  const [emailValue, setEmailValue] = useState('');

 /* const handleChange = (event) => {
    const { value } = event.target;
    setEmailValue(value);
    console.log("emailvalue: ", emailValue);
    setEmail(value);
  };*/
  useEffect(() => {
    setEmail(emailValue);
  }, [emailValue, setEmail]);

  return (
    <div>
         <p>Enter your email *</p> 
     
    {/*   <input  id="input-email"  type="email"  value={emailValue}   onChange={handleChange} required  placeholder='Email'/>
                     */ }
      <input 
        id="input-email" 
        type="email" 
        required 
        placeholder='Email'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
    </div>
  )
}

export default InputEmail
