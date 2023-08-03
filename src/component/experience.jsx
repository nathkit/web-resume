/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import myData from "../data/data";
import { ColorDataContext } from "../App";
import { useContext } from "react";

export default function Experience() {
  const context = useContext(ColorDataContext);

  const jobTitle = css`
    color: ${context.color.jobcolor};
    font-family: "Kanit", sans-serif;
    font-size: 18px;
    font-weight: 900;
    line-height: 24px; /* 133.333% */
    letter-spacing: 1px;
    text-transform: uppercase;
  `;

  const h1 = css`
    color: ${context.color.textcolor};
    font-family: "Playfair Display", serif;
    font-size: 36px;
    font-weight: 900;
    line-height: 46px; /* 127.778% */
    margin-bottom: 20px;
  `;

  const paramContent = css`
    color: ${context.color.textcolor};
    font-family: "Kanit", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px; /* 170% */
  `;
  const seperateLine = css`
    background: var(--primary, #0699a6);
    width: 54px;
    height: 10px;
  `;

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
