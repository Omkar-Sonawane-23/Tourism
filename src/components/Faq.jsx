import React from 'react'
import {questions} from './Faq-ques'
import {useState} from 'react'

import './Faq.css'
import { Design } from './Design'
import Footer from "../pages/Footer";
export const Faq = () => {
  const[value,setValue]=useState(questions);
  return (
    <>
    <div className="faq-card shadow-xl">
      <h1 className=' text-4xl text-[#f9a826]'>FAQ's about tourism in India</h1>
      {
        value.map((cur,index)=>{
          return <Design key={index} {...cur}></Design>;

        })
      }

    </div>
    <Footer />
    </>
  )
}
