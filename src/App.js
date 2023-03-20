import React from 'react'
import  './App.css'
import {useState} from 'react'

function App() {
  const[showanswer,setShowAnswer]=useState(false)
  const[showanswer1,setShowAnswer1]=useState(false)
  const[showanswer2,setShowAnswer2]=useState(false)
  const[showanswer3,setShowAnswer3]=useState(false)
  const[showanswer4,setShowAnswer4]=useState(false)
  
  return (
    <>
    <div className='container'>
      <div className='question'>
   
        <div  onClick={()=>setShowAnswer(!showanswer)}>
          <div>1.What are features of react?</div>
          <div >{showanswer ? '-' : '+'}</div>
        </div>
        {showanswer && (
          <div className="accordian-body">
           var = •	ReactJS is an open-source, component-based front end  JavaScript library which can be well characterised as a declarative, efficient, and a flexible one especially for building reusable UI components.
•	 There are some unique yet vital features of ReactJS that make it so popular. These are

          </div>
        )}
        </div>
     


  
    <div className="accordian-header" onClick={()=>setShowAnswer1(!showanswer1)}>
          <div>2.what is advantage of react?</div>
          <div className="sign">{showanswer1 ? '-' : '+'}</div>
        </div>
        {showanswer1 && (
          <div className="accordian-body">
           var = •	Easy to Learn and USe. ReactJS is much easier to learn and use. ...
•	Creating Dynamic Web Applications Becomes Easier. ...
•	Reusable Components. ...
•	Performance Enhancement. ...
•	The Support of Handy Tools. ...
•	Known to be SEO Friendly. ...
•	The Benefit of Having JavaScript Library. ...   
•	Scope for Testing the Codes.


          </div>
        )}

<div  onClick={()=>setShowAnswer2(!showanswer2)}>
          <div>3.what is real and virtual DOM</div>
          <div>{showanswer2? '-' : '+'}</div>
        </div>
        {showanswer2&& (
          <div className="accordian-body">
           var = :- VDOM is the virtual representation of Real DOM.
            React update the state changes in Virtual DOM first and then 
            it syncs with Real DOM. Virtual DOM is just like a blueprint of a machine, 
            can do the changes in the blueprint but those changes will not directly apply to the machine


          </div>
        )}

<div  onClick={()=>setShowAnswer3(!showanswer3)}>
          <div>4.what is real and virtual DOM</div>
          <div >{showanswer3 ? '-' : '+'}</div>
        </div>
        {showanswer3 && (
          <div >
           var = :- VDOM is the virtual representation of Real DOM.
            React update the state changes in Virtual DOM first and then 
            it syncs with Real DOM. Virtual DOM is just like a blueprint of a machine, 
            can do the changes in the blueprint but those changes will not directly apply to the machine


          </div>
        )} 
        <div onClick={()=>setShowAnswer4(!showanswer4)}>
          <div>5.what is real and virtual DOM</div>
          <div >{showanswer4? '-' : '+'}</div>
        </div>
        {showanswer4 && (
          <div >
           var = :- VDOM is the virtual representation of Real DOM.
            React update the state changes in Virtual DOM first and then 
            it syncs with Real DOM. Virtual DOM is just like a blueprint of a machine, 
            can do the changes in the blueprint but those changes will not directly apply to the machine

          
          </div>
         
        )}
    
     </div>
    
    

    </>
   
  );
}

export default App;
