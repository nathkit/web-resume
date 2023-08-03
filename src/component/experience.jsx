/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import myData from "../data/data";
import { paramContent, seperateLine } from "./AboutMe";

export const jobTitle = css`
  color: var(--secondary, #9e8c6c);
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 24px; /* 133.333% */
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const h1 = css`
  color: var(--font-color, #000);
  font-family: "Playfair Display", serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 46px; /* 127.778% */
  margin-bottom: 20px;
`;

export default function Experience() {
  const experiences = myData.experience;
  return (
    <div className="mb-10 tablet:mb-[50px] desktop:mb-[70px]">
      <h1 css={h1}>Experience</h1>
      {experiences.map((job, index) => (
        <div className="mb-10 tablet:mb-[60px]" key={index}>
          <div className="flex flex-col desktop:flex-row desktop:justify-between">
            <h1 css={jobTitle} className="my-auto mb-2 desktop:my-auto">
              {job.job} - {job.company}
            </h1>
            <h1 css={paramContent} className="text-lg">
              {job.year}
            </h1>
          </div>
          {job["desc"].map((item, index) => (
            <p key={index} css={paramContent}>
              • {item}
            </p>
          ))}
        </div>
      ))}
      <div css={seperateLine} className="mt-10 ml-0"></div>
    </div>
  );
}
