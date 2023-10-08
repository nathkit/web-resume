import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function Project() {
  const { jobTitle, paramContent, textColor } = useDarkmode();
  return (
    <div className="mb-[100px]">
      <h1 className={`mb-4 font-playfair text-headline3 ${textColor()}`}>
        Projects
      </h1>
      {myData.project.map((item, index) => {
        return (
          <div className="mb-2" key={index}>
            <a
              className="block text-etc-primary"
              href={item.link}
              target="_blank">
              <span className={`font-bold ${jobTitle} mb-1`}>{item.title}</span>
            </a>
            <span className={`${paramContent} ${textColor()}`}>
              {item.desc}
            </span>
          </div>
        );
      })}
    </div>
  );
}
