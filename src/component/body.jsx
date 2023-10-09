import React from "react";
import AboutMe from "./right-section/AboutMe";
import Experience from "./right-section/experience";
import SideSection from "./side_section";
import Education from "./right-section/education ";
import { useDarkmode } from "../contexts/darkmodeContext";
import { background } from "@chakra-ui/react";

export default function Body() {
  const {
    jobTitle,
    paramContent,
    separateLine,
    isDarkMode,
    setIsDarkMode,
    textColor,
  } = useDarkmode();
  return (
    <div
      style={{
        background: isDarkMode
          ? `linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.90) 100%), #0699A6`
          : null,
      }}
      className="min-w-[375px] tablet:max-w-screen desktop:max-w-[1440px] desktop:px-20 flex flex-col pt-10">
      <AboutMe />
      <div className="mx-0 flex flex-col justify-center desktop:flex-row desktop:justify-between tablet:max-w-screen desktop:max-w-[1440px]">
        <div className="desktop:ml-0 max-w-[768px] desktop:max-w-[400px]">
          <SideSection />
        </div>
        <div className="desktop:mr-0 max-w-[768px]">
          <Experience />
        </div>
      </div>
    </div>
  );
}
