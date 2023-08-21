import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="appContainer">
        <h1>Hello, NewyorkTimes API</h1>
        <Header />
      </div>
    </>
  );
}

export default App;
