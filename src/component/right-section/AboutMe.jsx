import React from "react";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function AboutMe() {
  const { paramContent, separateLine, isDarkMode, setIsDarkMode, textColor } =
    useDarkmode();

  return (
    <div className="mx-auto mb-10 max-w-[335px] tablet:mb-12 tablet:max-w-[768px] desktop:mb-16 desktop:max-w-[1440px]">
      <h1 className={`font-playfair text-headline3 mb-5 ${textColor()}`}>
        About Me
      </h1>
      <p className={`${paramContent} ${textColor()}`}>
        I was a process and production engineer turned full-stack software
        developer with expertise in HTML, CSS, React, JavaScript, SQL, MongoDB,
        Node.js, and more. My analytical background and problem-solving skills
        enable me to craft innovative solutions. A collaborative team player
        with a passion for user-centric applications and data visualization, I
        am dedicated to continuous learning and driving impactful results.
      </p>
      <div className={`mt-10 ml-0 ${separateLine}`}></div>
    </div>
  );
}
