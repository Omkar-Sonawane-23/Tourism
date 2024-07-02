// FAQ Design JSX file 

import React, { useState } from 'react';
import './Design.css'; // Css File for FAQ

export const Design = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  function toggleAnswer() {
    setShow(!show);
  }

  return (
    <div className="card mt-5">
      <div className="topic" onClick={toggleAnswer} role="button" aria-expanded={show} style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
        <h2>{question}</h2>
        <div>
          <p className="toggle-icon">{show ? "-" : "+"}</p>
        </div>
      </div>
      {show && <p className="answer">{answer}</p>}
    </div>
  );
};
