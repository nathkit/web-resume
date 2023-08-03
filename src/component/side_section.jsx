/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";
import myData from "../data/data";
import { ColorDataContext } from "../App";
import { useContext } from "react";

const careerTraitsContent = css`
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;

function SkillSet({ jobTitle, paramContent }) {
  return (
    <div className="mb-[60px] desktop:mb-[100px]">
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
                color={"#06939f"}
              />
            </h1>
          </div>
        );
      })}
    </div>
  );
}
function CareerTraits(props) {
  return (
    <div className="mb-[100px]">
      <h1 css={props.cssprops} className="mb-2">
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
function RecentWork(props) {
  return (
    <div className="mb-[100px]">
      <h1 css={props.cssprops} className="mb-2">
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

  const paramContent = css`
    color: ${context.color.textcolor};
    font-family: "Kanit", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px; /* 170% */
  `;
  return (
    <div>
      <SkillSet cssprops={(jobTitle, paramContent)} />
      <CareerTraits cssprops={jobTitle} />
      <RecentWork cssprops={jobTitle} />
    </div>
  );
}

export default SideSection;
