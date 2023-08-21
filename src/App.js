import React from "react";

import "./App.css";
import Header from "./Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="appContainer">
        <h1>Hello, NewyorkTimes API</h1>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
