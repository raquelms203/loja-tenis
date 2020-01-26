import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
