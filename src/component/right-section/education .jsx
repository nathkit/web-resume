import React from "react";
import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

// export const seperateLine = css`
//   @media (max-width: 1280px) {
//     background: var(--primary, #0699a6);
//     width: 54px;
//     height: 10px;
//   }
// `;

export default function Education() {
  const {
    jobTitle,
    paramContent,
    separateLine,
    isDarkMode,
    setIsDarkMode,
    textColor,
  } = useDarkmode();

  return (
    <div className="mb-10 max-w-[335px] tablet:max-w-[768px]">
      <h1 className={`${textColor()} font-playfair text-headline3 mb-5`}>
        Education
      </h1>
      <div>
        <h1 className={`${jobTitle} text-etc-secondary mb-2`}>
          {myData.education[0].school}
        </h1>
        <div className="flex flex-col justify-between desktop:flex-row">
          <h1 className={`${jobTitle}  text-etc-secondary my-auto`}>
            {myData.education[0].major}
          </h1>
          <h1 className={`${textColor()} text-lg`}>
            {myData.education[0].year}
          </h1>
        </div>
      </div>
      <div className="mt-10 ml-0"></div>
    </div>
  );
}
