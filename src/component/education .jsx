/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import myData from "../data/data";
import { paramContent } from "./AboutMe";
import { h1, jobTitle } from "../component/experience";

export default function Education() {
  return (
    <div className="mb-[66px]">
      <h1 css={h1}>Education</h1>
      <div css={paramContent}>
        <h1 css={jobTitle}>{myData.education[0].school}</h1>
        <div className="flex justify-between">
          <h1 css={jobTitle}>{myData.education[0].major}</h1>
          <h1 css={paramContent} className="text-lg">
            {myData.education[0].year}
          </h1>
        </div>
      </div>
    </div>
  );
}
