import "./App.css";
import Body from "./component/body";
import Header from "./component/header";
import Footer from "./component/footer";
import React, { useState } from "react"; // import useContext

export const ColorDataContext = React.createContext();

export default function App() {
  const color = {
    headercolor: "#f5f3f0",
    textcolor: "#000000",
    bgcolor: "#ffffff",
    jobcolor: "#9e8c6c",
  };
  return (
    <>
      <ColorDataContext.Provider value={{ color: color }}>
        <Header />
        <Body />
        <Footer />
      </ColorDataContext.Provider>
    </>
  );
}
