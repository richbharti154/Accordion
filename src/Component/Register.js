import React,{useState} from 'react'
import Input from '../Atom/Input'
export default function Register(){
  const[firstname,setFirstName]=useState('')
  const[secondname,setSecondName]=useState('')
   const[email,setEmail] =useState('')
   const[password,setPassword]=useState('')
   const[check, setCheck]=useState('')
   const[check2,setCheck2]=useState('')
    return(
      <>
      <div>
     <div>
    
   <Input onChange={(e)=>setFirstName(e.target.value)} value={firstname}  
    type='text' placeholder='First Name'/>
    <Input onChange={(e)=>setSecondName(e.target.value)} 
     value={secondname} placeholder='LastName' type='text'/>
   <Input onChange={(e)=>setEmail(e.target.value)}  value={email} placeholder='@Email' type='text'/>
  <Input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password' type='text'/>
<div style={{display:'flex',gap:'3rem'}}>
  <Input onChange={(e)=>setCheck(e.target.value)} type='checkbox' value={check} />
  <p  style={{marginBottom:'20rem'}}>many details are here clear{" "}</p>
  </div>
  <div>
    <Input type='checkbox' onChange={(e)=>setCheck2(e.target.value)} value={}/>
  </div>
   </div>
   <div>
   </div>
   </div>
 
  </>
    )
    }
