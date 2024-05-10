import React , {useEffect}from 'react'
import "./style.css"

function InputName({name,setName}) {


  useEffect(() => {
    setName(name);
  }, [name, setName]);

  return (
    <div>   
      <p className='p-form'>Enter your name *</p>

     <input 
        id="input-name" 
        type="text" 
        required 
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
   
    </div>
  )
}

export default InputName
