import React, { useState, useEffect } from "react";
import "./App.css";
import Sun from "./components/Sun";
import Moon from "./components/Moon";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

export default function LandingPage() {
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = storedTheme ? storedTheme : "light";

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
      <div className="page-container">
        <About />
        <WorkExperience />
      </div>
    </>
  );
}
