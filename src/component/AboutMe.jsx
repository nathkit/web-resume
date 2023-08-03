/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { h1 } from "../component/experience";

export const paramContent = css`
  color: #000;
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; /* 170% */
`;
export const seperateLine = css`
  background: var(--primary, #0699a6);
  width: 54px;
  height: 10px;
`;

export default function AboutMe() {
  return (
    <div className="mx-auto mb-10 max-w-[335px] tablet:mb-12 tablet:max-w-[482px] desktop:mb-16 desktop:max-w-[700px]">
      <h1 css={h1}>About Me</h1>
      <p css={paramContent}>
        I was a process and production engineer turned full-stack software
        developer with expertise in HTML, CSS, React, JavaScript, SQL, MongoDB,
        Node.js, and more. My analytical background and problem-solving skills
        enable me to craft innovative solutions. A collaborative team player
        with a passion for user-centric applications and data visualization, I
        am dedicated to continuous learning and driving impactful results.
      </p>
      <div css={seperateLine} className="mt-10 ml-0"></div>
    </div>
  );
}
