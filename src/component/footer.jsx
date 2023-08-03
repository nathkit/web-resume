/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorDataContext } from "../App";
import { useContext } from "react";

export function Contact(props) {
  const email = css`
    color: ${props.color};
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 46px; /* 127.778% */
    margin-bottom: ${props.mb};
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 40px; /* 133.333% */
    }
    @media (max-width: 375px) {
      text-align: center;
      font-size: 26px;
      line-height: 36px; /* 138.462% */
    }
  `;
  const icon = css`
    font-size: 36px;
    color: ${props.color};
    @media (max-width: 375px) {
      font-size: 28px;
    }
  `;
  return (
    <>
      <h1 id="contact" css={email}>
        {props.content}
      </h1>
      <div css={icon}>
        <a className="mx-5" href="https://github.com/nathkit" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="mx-5" href="#" target="_blank">
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
  const context = useContext(ColorDataContext);
  const footerBG = css`
    max-width: 1440px;
    height: 547px;
    background-color: ${context.color.headercolor};
    clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);
  `;
  const h1 = css`
    color: ${context.color.textcolor};
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 66px;
    line-height: 82px; /* 124.242% */
    letter-spacing: -1.138px;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 56px;
      line-height: 66px; /* 117.857% */
    }
  `;
  return (
    <div css={footerBG} className="flex flex-col justify-center items-center">
      <h1 css={h1}>Get in touch!</h1>
      <Contact
        mb="65px"
        color="#0699a6"
        content="nathkit101@gmail.com | (+66)80-954-5994"
      />
    </div>
  );
}
