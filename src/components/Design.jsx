import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Design = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const [sign, setSign] = useState("+");
  const theme = useSelector((state) => state.theme.theme);

  function one() {
    setShow(!show);
  }
  return (
    <div className="card mt-5">
      <div
        class="topic"
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <h2>{question}</h2>
        <div
          onClick={() => {
            one();
          }}
        >
          <p
            style={{
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",

              paddingRight: "10px",
              paddingLeft: "30px",
            }}
          >
            {show ? "-" : "+"}
          </p>
        </div>

      </div>
      {show && (
        <p
          style={{
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",

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
