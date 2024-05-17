import React, { useEffect, useState } from 'react'
import { BsArrowUpShort } from "react-icons/bs";

const GoToTop = () => {
    const[isVisible,setIsVisible]=useState(false);
    const gotoBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    };

const listentoscroll=()=>{
    let heighttohidden=300;
    const winScroll=
    document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll>heighttohidden){
        setIsVisible(true);
    }else{
        setIsVisible(false);
    }
}
    useEffect(()=>{
        window.addEventListener("scroll",listentoscroll);
    },[]);

  return (
    <div>
    {isVisible && (
    
    <div className='text-white text-3xl w-11 h-8 bg-blue-500 hover:bg-slate-600 hover:text-white ease-in-out duration-300 shadow-{theme.colors.shadow} rounded-full fixed bottom-4 right-4 flex justify-center items-center cursor-pointer  ' onClick={gotoBtn}>
      <BsArrowUpShort />
    </div>
    )}
    </div>
  );
};


export default GoToTop
