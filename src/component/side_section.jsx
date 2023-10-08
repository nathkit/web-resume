import React from "react";
import SkillSet from "./left-section/skillsets";
import Project from "./left-section/project";
import Certifications from "./left-section/certifications";
import Education from "./right-section/education ";

function SideSection() {
  return (
    <div className="max-w-[335px] tablet:max-w-[768px]">
      <SkillSet />
      <Certifications />
      <Education />
      <Project />
    </div>
  );
}

export default SideSection;
