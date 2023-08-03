/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";
import myData from "../data/data";
import { h1, jobTitle } from "../component/experience";
import { paramContent } from "./AboutMe";
import Education from "./education ";

const careerTraitsContent = css`
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;

function SkillSet() {
  return (
    <div className="mb-[100px]">
      <h1 css={jobTitle} className="mb-2">
        SkillSet
      </h1>
      {myData.skill.map((skill, index) => {
        return (
          <div className="flex justify-between mb-2">
            <h1 css={paramContent} className="block my-auto" key={index}>
              {skill.title}
            </h1>
            <h1>
              <CircularProgress
                className="block"
                value={skill.score}
                max={10}
                thickness={16}
                size={8}
              />
            </h1>
          </div>
        );
      })}
    </div>
  );
}
function CareerTraits() {
  return (
    <div className="mb-[100px]">
      <h1 css={jobTitle} className="mb-2">
        Career Traits
      </h1>
      {myData.careertraits.map((item, index) => {
        return (
          <p css={careerTraitsContent} className="mb-8" key={index}>
            <span className="font-bold">{item.topic}</span> - {item.desc}
          </p>
        );
      })}
    </div>
  );
}
function RecentWork() {
  return (
    <div className="mb-[100px]">
      <h1 css={jobTitle} className="mb-2">
        Recent Works
      </h1>
      {myData.recentwork.map((item, index) => {
        return (
          <a
            className="block text-[#0699A6]"
            css={careerTraitsContent}
            key={index}
            href={item}
            target="_blank">
            {item} →
          </a>
        );
      })}
    </div>
  );
}

function SideSection() {
  return (
    <div>
      <SkillSet />
      <CareerTraits />
      <RecentWork />
    </div>
  );
}

export default SideSection;
