import { useDarkmode } from "../contexts/darkmodeContext";
import bglight from "../assets/footerBg.svg";
import bglightTablet from "../assets/footerBgTablet.svg";
import bglightMobile from "../assets/footerBgMobile.svg";
import bgDark from "../assets/footerBgDark.svg";
import bgDarkTablet from "../assets/footerBgDarkTablet.svg";
import bgDarkMobile from "../assets/footerBgDarkMobile.svg";

export function Contact(props) {
  return (
    <>
      <h1
        id="contact"
        className="mb-[65px] text-etc-primary text-headline3m tablet:text-headline3 text-center font-playfair">
        {props.content}
      </h1>
      <div className="text-etc-primary text-[28px] tablet:text-[36px]">
        <a className="mx-5" href="https://github.com/nathkit" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="mx-5"
          href="https://discordapp.com/users/871385657812058142"
          target="_blank">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a
          className="mx-5"
          href="https://www.linkedin.com/in/nathkit-tang/"
          target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="mx-5"
          href="https://www.instagram.com/naeholmes/"
          target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          className="mx-5"
          href="https://www.facebook.com/Holmes.Nae"
          target="_blank">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
      </div>
    </>
  );
}

export default function Footer() {
  const { isDarkMode, textColor, footerBg } = useDarkmode();
  return (
    <div
      id="footer"
      className={`${footerBg()} relative flex flex-col justify-center items-center max-w-[1440px] h-[547px]`}>
      {isDarkMode && (
        <div
          className="absolute z-[-2] inset-0"
          style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.90) 100%), #0699A6`,
          }}></div>
      )}
      <h1
        className={`${textColor()} mb-10 font-playfair text-headline2t desktop:text-headline2d`}>
        Get in touch!
      </h1>
      <Contact content="nathkit101@gmail.com | (+66)80-954-5994" />
    </div>
  );
}
