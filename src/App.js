import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/index";
import { Provider } from "react-redux";
import store from "./store"; 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
