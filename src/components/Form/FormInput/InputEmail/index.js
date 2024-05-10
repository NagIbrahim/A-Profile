import React , {useEffect} from 'react'
import "./style.css"


function InputEmail({email, setEmail }) {

 
  useEffect(() => {
    setEmail(email);
  }, [email, setEmail]);

  return (
    <div>
         <p className='p-form'>Enter your email *</p> 
     
      <input 
        id="input-email" 
        type="email" 
        required 
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  )
}

export default InputEmail
