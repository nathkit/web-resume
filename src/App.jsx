import "./App.css";
import Body from "./component/body";
import Header from "./component/header";
import Footer from "./component/footer";
import React, { useState } from "react"; // import useContext

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
