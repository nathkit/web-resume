import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function Project() {
  const { jobTitle, paramContent, textColor, separateLine, isDarkMode } =
    useDarkmode();
  return (
    <div className="mb-[100px]">
      <h1 className={`mb-4 font-playfair text-headline3 ${textColor()}`}>
        Projects
      </h1>
      {myData.project.map((item, index) => {
        return (
          <div className="mb-6" key={index}>
            <div className="flex">
              <a
                className="mx-0 my-auto text-etc-primary block w-[210px] mr-5"
                href={item.link}
                target="_blank">
                <span className={`font-bold ${jobTitle} mb-1`}>
                  {item.title}
                </span>
              </a>
            </div>
            <span className={`${paramContent} ${textColor()} block mb-1`}>
              {item.desc}
            </span>
            <a
              className={`mx-0 ${
                isDarkMode ? "text-[orange]" : "text-[#39393c]"
              } text-[18px] tablet:text-[26px] inline-block mr-5`}
              href={item.link}
              target="_blank">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
            <a
              className={`mx-0 ${
                isDarkMode ? "text-[orange]" : "text-[#39393c]"
              } text-[18px] tablet:text-[26px] inline-block`}
              href={item.link2}
              target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        );
      })}
      <div className={`mt-10 ml-0 ${separateLine}`}></div>
    </div>
  );
}
