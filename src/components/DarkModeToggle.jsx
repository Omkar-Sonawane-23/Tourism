
// This is the dark mode toggle component created to effeciently allow the user to toggle between the light and dark components 

import React, { useState, useEffect } from "react";


//dark mode toggle component
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });


  //toggle logic
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


  //setting the component
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  //rendering the result across the webpages.
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
