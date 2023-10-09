import myData from "../../data/data";
import { useDarkmode } from "../../contexts/darkmodeContext";

export default function Certifications() {
  const { jobTitle, paramContent, textColor, isDarkMode, separateLine } =
    useDarkmode();
  return (
    <div className="mb-10">
      <h1 className={`mb-4 font-playfair text-headline3 ${textColor()}`}>
        Certifications
      </h1>
      {myData.certificate.map((item, index) => {
        return (
          <div className={`mb-2 ${paramContent} ${textColor()}`} key={index}>
            <p className={`font-bold ${isDarkMode && "text-etc-secondary"}`}>
              {item.title}
            </p>
            <p>{item.by}</p>
          </div>
        );
      })}
      <div className={`mt-10 ml-0 ${separateLine}`}></div>
    </div>
  );
}
