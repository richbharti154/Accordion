import React from 'react'
export default function Input({type,placeholder,onChange,value }){
  
    return(
        <>
        <div>
           
  <input type={type} placeholder={placeholder}  onChange={onChange}
  value={value}/>
     </div>


     
      
        </>
    )
}