import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import data from "../assets/LoaderData";
import { useSelector } from "react-redux";
const Loader = () => {
  const theme = useSelector((state) => state.theme.theme);
  function randNo() {
    const randNumber = Math.random();
    const index = Math.floor(randNumber * 8);
    return index;
  }
  const arrInd = randNo();

  useEffect(() => {
  }, [theme]);
  return (
    <div id="loader"
      
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }    h-screen w-full flex flex-col justify-center items-center`}
    > 
      <div id="load" 
        
      >
        <img
          src="https://t4.ftcdn.net/jpg/00/69/53/63/360_F_69536324_PXoCItwXg8VaC1lTB0zqkE0JyFsIIO1Y.jpg"
          id="logo"
        />
        <h6 className="text-[2.5rem] font-[Agbalumo]" id="loadLogo">
          Bharat <span id="samarkand">Yatra</span>
        </h6>
        <h6 id="factHead">Did you know?</h6>
        <h6 id="fact"
        style={{color: theme === "light" ? "black" : "white"}}
        >{data[arrInd]}</h6>
      </div>
    </div>
  );
};
export default Loader;
