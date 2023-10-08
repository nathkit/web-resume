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
      className="min-w-[375px] flex flex-col-reverse pt-10 desktop:flex-row tablet:max-w-screen desktop:max-w-[1440px]">
      <div className="max-w-[700px] desktop:max-w-[400px]">
        <SideSection />
      </div>
      <div className="max-w-[700px]">
        <AboutMe />
        <Experience />
      </div>
    </div>
  );
}
