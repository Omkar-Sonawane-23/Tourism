import React from "react";
import { questions } from "./Faq-ques";
import { useState } from "react";

import "./Faq.css";
import { Design } from "./Design";
import { useSelector } from "react-redux";

export const Faq = () => {
  const [value, setValue] = useState(questions);
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center"
    style={{
      backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
      color: theme === "dark" ? "#f3f4f6" : "#1f2937",
    }}
    >
      <div
        className="faq-card"
        
      >
        <h1
          style={{ fontSize: "40px", marginBottom: "20px", fontWeight: "bold" }}
        >
          FAQs about tourism in India
        </h1>
        {value.map((cur, index) => {
          return <Design key={index} {...cur}></Design>;
        })}
      </div>
    </div>
  );
};
