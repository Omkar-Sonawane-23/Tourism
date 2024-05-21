import React from 'react'
import {questions} from './Faq-ques'
import {useState} from 'react'

import { Design } from './Design'

export const Faq = () => {
  const[value,setValue]=useState(questions);
  return (
    <div className="faq-card shadow-xl" style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', width: '100%', padding: '50px' }}>
     <h1 className='text-4xl text-[#5AC8FA]' style={{ textAlign: 'center' }}>
  Discover India: Your Ultimate FAQ Guide to Tourism
</h1>

      {
        value.map((cur,index)=>{
          return <Design key={index} {...cur}></Design>;

        })
      }

    </div>
  )
}
