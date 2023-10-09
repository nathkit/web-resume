import React from "react";
import { useDarkmode } from "../contexts/darkmodeContext";

const Switch = () => {
  const { setIsDarkMode, isDarkMode } = useDarkmode();

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`switch ${isDarkMode ? "on" : "off"} absolute top-10 right-10`}
      onClick={toggleSwitch}>
      <div className={`slider ${isDarkMode ? "on" : "off"}`}></div>
    </div>
  );
};

export default Switch;
