/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Footer() {
  const footerBG = css`
    max-width: 1440px;
    height: 547px;
    background-color: rgba(158, 140, 108, 0.1);
    clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);
  `;
  const h1 = css`
    color: #000;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 66px;
    font-style: normal;
    font-weight: 900;
    line-height: 82px; /* 124.242% */
    letter-spacing: -1.138px;
    margin-bottom: 40px;
  `;
  const email = css`
    color: #0699a6;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 46px; /* 127.778% */
    margin-bottom: 65px;
  `;
  const icon = css`
    font-size: 36px;
    color: #0699a6;
  `;
  return (
    <div css={footerBG} className="flex flex-col justify-center items-center">
      <h1 css={h1}>Get in touch!</h1>
      <h1 id="contact" css={email}>
        nathkit101@gmail.com | (+66)80-954-5994
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
    </div>
  );
}
