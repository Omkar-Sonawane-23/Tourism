import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import data from "../assets/LoaderData";

const Loader = () => {
  function randNo() {
    const randNumber = Math.random();
    const index = Math.floor(randNumber * 8);
    return index;
  }
  const arrInd = randNo();
  return ( <div id="loader">
      <div id="load">
        <img src="https://t4.ftcdn.net/jpg/00/69/53/63/360_F_69536324_PXoCItwXg8VaC1lTB0zqkE0JyFsIIO1Y.jpg" id="logo"/>
        <h6 className="text-[2.5rem] font-[Agbalumo]" id="loadLogo">
          Bharat <span id="samarkand">Yatra</span></h6>
        <h6 id="factHead">Did you know?</h6>
        <h6 id="fact">{data[arrInd]}</h6>
      </div>
    </div>
  );
};
export default Loader;
