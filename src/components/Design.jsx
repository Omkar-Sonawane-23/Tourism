import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Design = ({ question, answer }) => {
  const theme = useSelector((state) => state.theme.theme);
  const [show, setShow] = useState(false);
  const [sign, setSign] = useState("+");
  function one() {
    setShow(!show);
  }
  return (
    <div className="card" style={{ Width: "50%", marginBottom: "20px" }}>
      <div
        class="topic"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2
          style={{
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
            width: "100%",
            paddingLeft: "10px",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            one();
          }}
        >
          {"Q." + question}
        </h2>
        <p
          style={{ 
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
           paddingRight: "10px", 
           paddingLeft: "30px" }}
        >
          {show ? "-" : "+"}
        </p>
      </div>
      {show && (
        <p
          style={{
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
            background: theme === "dark" ? "#1f2937" : "#f3f4f6",
            border: "1px solid black",
            padding: "20px",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
};
