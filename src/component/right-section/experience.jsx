import React from "react";
import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function Experience() {
  const {
    jobTitle,
    paramContent,
    separateLine,
    isDarkMode,
    setIsDarkMode,
    textColor,
  } = useDarkmode();

  const experiences = myData.experience;

  return (
    <div className="mb-10 max-w-[335px] tablet:max-w-[768px] tablet:mb-[50px] desktop:mb-[70px]">
      <h1 className={`font-playfair text-headline3 mb-5 ${textColor()}`}>
        Experience
      </h1>
      {experiences.map((job, index) => (
        <div className="mb-5" key={index}>
          <div className="flex flex-col desktop:flex-row desktop:justify-between">
            <h1
              className={`my-auto mb-2 desktop:my-auto ${jobTitle} text-etc-secondary`}>
              {job.job} - {job.company}
            </h1>
            <h1 className={`text-lg ${paramContent} ${textColor()}`}>
              {job.year}
            </h1>
          </div>
          {job["desc"].map((item, index) => (
            <p key={index} className={`text-lg ${paramContent} ${textColor()}`}>
              • {item}
            </p>
          ))}
        </div>
      ))}
      <div className={`mt-10 ml-0 ${separateLine}`}></div>
    </div>
  );
}
