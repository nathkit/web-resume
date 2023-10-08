import React, { useState } from "react";

const DarkmodeContext = React.createContext();

const DarkmodeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const paramContent = `font-kanit text-[18px] font-[400] leading-[34px]`;
  const jobTitle = `font-kanit text-[18px] font-extrabold leading-5 tracking-wider uppercase`;
  const separateLine = `bg-etc-primary w-[54px] h-[10px]`;

  const textColor = () => {
    if (isDarkMode) {
      return "text-etc-textlight";
    }
    return "text-etc-textdark";
  };

  return (
    <DarkmodeContext.Provider
      value={{
        paramContent,
        jobTitle,
        separateLine,
        isDarkMode,
        setIsDarkMode,
        textColor,
      }}>
      {props.children}
    </DarkmodeContext.Provider>
  );
};

const useDarkmode = () => React.useContext(DarkmodeContext);

export { DarkmodeProvider, useDarkmode };
