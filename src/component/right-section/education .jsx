import React from "react";
import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function Education() {
  const { jobTitle, separateLine, textColor, isDarkMode } = useDarkmode();

  return (
    <div className="mb-10 max-w-[335px] tablet:max-w-[768px]">
      <h1 className={`${textColor()} font-playfair text-headline3 mb-5`}>
        Education
      </h1>
      <div>
        <h1
          className={`${jobTitle} ${isDarkMode && "text-etc-secondary"} mb-2`}>
          {myData.education[0].school}
        </h1>
        <div className="flex flex-col justify-between desktop:flex-row">
          <h1
            className={`${jobTitle}  ${
              isDarkMode && "text-etc-secondary"
            } my-auto`}>
            {myData.education[0].major}
          </h1>
          <h1 className={`${textColor()} text-lg`}>
            {myData.education[0].year}
          </h1>
        </div>
      </div>
      <div className={`mt-10 ml-0 ${separateLine}`}></div>
    </div>
  );
}
