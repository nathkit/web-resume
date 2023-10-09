import me from "../img/me.jpg";
import nicetomeetyou from "../assets/nicetomeetyou.svg";
import { useDarkmode } from "../contexts/darkmodeContext";
import headerBg from "../assets/headerBg.svg";
import headerBgTablet from "../assets/headerBgTablet.svg";
import headerBgMobile from "../assets/headerBgMobile.svg";
import headerBgDark from "../assets/headerBgDark.svg";
import headerBgDarkTablet from "../assets/headerBgDarkTablet.svg";
import headerBgDarkMobile from "../assets/headerBgDarkMobile.svg";
import Switch from "./switch";

export default function Header() {
  const { jobTitle, isDarkMode, setIsDarkMode, textColor, headerBg } =
    useDarkmode();

  return (
    <div
      className={`${headerBg()} relative mx-auto min-w-[375px] min-h-[596px] flex flex-col items-center tablet:max-w-screen tablet:min-h-[736px] desktop:max-w-[1440px] desktop:min-h-[747px] desktop:flex-row desktop:justify-around desktop:items-center`}>
      {isDarkMode && (
        <div
          className="absolute z-[-2] inset-0"
          style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.90) 100%), #0699A6`,
          }}></div>
      )}
      <Switch />
      <div className="relative mt-20 desktop:my-auto">
        <img
          src={me}
          className="max-w-40 max-h-40 rounded-full tablet:max-w-52 tablet:max-h-52 desktop:max-w-[350px] desktop:max-h-[350px]"
        />
        <img
          src={nicetomeetyou}
          className="animate-spin-slow w-[100px] h-[100px] absolute top-[-30px] left-[90px] tablet:top-[-30px] tablet:left-[130px] desktop:top-[238px] desktop:left-[241px] desktop:w-[152px] desktop:h-[152px]"
        />
      </div>
      <div className="max-w-fit max-h-fit flex flex-col items-center mt-8 desktop:items-start">
        <h1
          className={`text-sm text-center max-w-[375px] tablet:max-w-[482px] tablet:text-lg desktop:max-w-[635px] desktop:mb-[10px] ${jobTitle} text-etc-secondary`}>
          FULLSTACK SOFTWARE DEVELOPER / DATA ANALYST
        </h1>
        <h1
          // style={{ color: { textColor } }}
          className={`${textColor()} font-playfair mt-4 mb-10 text-center text-headline1m max-w-[375px] tablet:max-w-[482px] tablet:text-headline1t desktop:max-w-[720px] desktop:text-headline1d desktop:mb-10 desktop:min-h-[100px] desktop:text-left`}>
          Nathkit Tangthumrongsakkul
        </h1>
        <div className="flex justify-center desktop:justify-start self-start w-full">
          <button
            className="btn bg-etc-primary hover:opacity-80 active:opacity-100 mr-5"
            onClick={() => {
              const footerElement = document.getElementById("footer");
              footerElement.scrollIntoView({ behavior: "smooth" });
            }}>
            CONTACT ME
          </button>
          <button
            onClick={() => {
              const resumeLink = document.createElement("a");
              resumeLink.href =
                "https://1drv.ms/b/s!Arju_3xRjjHWxZIto48G0vUyhhrq-Q?e=W0JVll";
              resumeLink.target = "_blank";
              resumeLink.rel = "noopener noreferrer";
              resumeLink.download = "231009_Nathkit Resume.pdf";
              resumeLink.click();
            }}
            className="btn bg-etc-secondary hover:opacity-80 active:opacity-100">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
