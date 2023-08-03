/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AboutMe from "./AboutMe";
import Experience from "./experience";
import SideSection from "./side_section";
import Education from "./education ";

export default function Body() {
  return (
    <div className="max-w-[335px] flex flex-col-reverse mt-10 desktop:flex-row tablet:max-w-[482px] desktop:max-w-[1440px]">
      <div className="max-w-[350px]">
        <SideSection />
      </div>
      <div className="max-w-[700px]">
        <AboutMe />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
