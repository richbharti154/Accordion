import React from 'react'
import {questionBank} from './Data'
import {useState} from 'react'
export default function QuizApp(){
  const[currentQuestion,setCurrentQuestion]=useState(0)
   const[score,setScore]=useState(0)
   const[showscore,setShowScore]=useState(false)
    return(
      <>
      <div>
        <p>hlo</p>
        {questionBank.map((element)=><p>{element.question}</p>)},
       
      </div>  
      <div>
        {showscore? (
          <div>
          your score out of{score}/{questionBank.length}
         </div>
        ):
        (
        <div>
        <span>currentQuestion/{questionBank.length}</span>
        </div>
        )}
        </div>
        </>
    )
}

