import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleThemeChange = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world</p>
        <button
          onClick={() => {
            handleThemeChange();
          }}
        >
          change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
