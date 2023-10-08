import { ChakraProvider } from "@chakra-ui/react";
import { DarkmodeProvider } from "./contexts/darkmodeContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkmodeProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DarkmodeProvider>
  </React.StrictMode>
);
