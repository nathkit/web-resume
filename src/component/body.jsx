/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AboutMe from "./AboutMe";
import Experience from "./experience";
import SideSection from "./side_section";
import Education from "./education ";

export default function Body() {
  return (
    <div className="max-w-[1440px] flex pt-[83px]">
      <div className="w-[350px]">
        <SideSection />
      </div>
      <div className="w-[700px]">
        <AboutMe />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
