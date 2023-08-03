/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import myData from "../data/data";
import { paramContent } from "./AboutMe";
import { h1, jobTitle } from "../component/experience";

export const seperateLine = css`
  @media (max-width: 1280px) {
    background: var(--primary, #0699a6);
    width: 54px;
    height: 10px;
  }
`;

export default function Education() {
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
