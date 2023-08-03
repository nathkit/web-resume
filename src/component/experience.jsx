/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import myData from "../data/data";
import { paramContent } from "./AboutMe";

export const jobTitle = css`
  color: #9e8c6c;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: auto 0;
`;

export const h1 = css`
  color: #000;
  font-family: Playfair Display;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 46px; /* 127.778% */
  margin-bottom: 20px;
`;

export default function Experience() {
  const experiences = myData.experience;
  return (
    <div>
      <h1 css={h1}>Experience</h1>
      {experiences.map((job, index) => (
        <div className="mb-[66px]" key={index}>
          <div className="flex justify-between">
            <h1 css={jobTitle}>
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
    </div>
  );
}
