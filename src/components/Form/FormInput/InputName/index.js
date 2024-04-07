import React , {useState,useEffect}from 'react'
import "./style.css"

function InputName({setName}) {

  const [nameValue, setNameValue] = useState('');


  useEffect(() => {
    setName(nameValue);
  }, [nameValue, setName]);

  return (
    <div>   
      <p>Enter your name *</p>

     <input 
        id="input-name" 
        type="text" 
        required 
        placeholder='Name'
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
   
    </div>
  )
}

export default InputName
