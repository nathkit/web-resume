/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import myData from "../data/data";
import { ColorDataContext } from "../App";
import { useContext } from "react";

export const seperateLine = css`
  @media (max-width: 1280px) {
    background: var(--primary, #0699a6);
    width: 54px;
    height: 10px;
  }
`;

export default function Education() {
  const context = useContext(ColorDataContext);
  const paramContent = css`
    color: ${context.color.textcolor};
    font-family: "Kanit", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px; /* 170% */
  `;
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
  return (
    <div className="mb-[40px]">
      <h1 css={h1}>Education</h1>
      <div css={paramContent}>
        <h1 css={jobTitle}>{myData.education[0].school}</h1>
        <div className="flex flex-col justify-between desktop:flex-row">
          <h1 css={jobTitle} className="my-auto">
            {myData.education[0].major}
          </h1>
          <h1 css={paramContent} className="text-lg">
            {myData.education[0].year}
          </h1>
        </div>
      </div>
      <div css={seperateLine} className="mt-10 ml-0"></div>
    </div>
  );
}
