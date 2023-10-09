import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function SkillSet(props) {
  const { paramContent, textColor, isDarkMode, separateLine } = useDarkmode();
  return (
    <div className="mb-10">
      <h1 className={`mb-2 font-playfair text-headline3 ${textColor()}`}>
        Skill Set
      </h1>
      {myData.skill.map((skill, index) => {
        return (
          <div className="flex justify-between mb-2" key={index}>
            <h1 className={`block my-auto ${paramContent} ${textColor()}`}>
              <span
                className={`font-bold ${isDarkMode && "text-etc-secondary"}`}>
                {skill.headline}
              </span>
              {skill.title}
            </h1>
          </div>
        );
      })}
      <div className={`mt-10 ml-0 ${separateLine}`}></div>
    </div>
  );
}
