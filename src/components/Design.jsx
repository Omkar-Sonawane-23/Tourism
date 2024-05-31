import React from 'react'
import {useState} from 'react'

export const Design = ({question,answer}) => {
  const [show,setShow]= useState(false);
  const [sign,setSign]= useState("+");
  function one(){
    setShow(!show);
  }
  return (
    <div  className="card mt-5">
      <div class="topic" style={{display:"flex",justifyContent:"space-between",cursor:"pointer"}} >
      <h2 onClick={()=>{one()}}>{question} </h2>
      <div onClick={()=>{one()}}>
      <p style={{color:"black",paddingRight:"10px",paddingLeft:"30px"}}>{show?"-":"+"}</p></div>
      </div>
      {
        show && <p style={{color:"black",background:"white",border:"1px solid black",padding:"20px"}}>{answer}</p>
      }
      
    </div>
  )
}
