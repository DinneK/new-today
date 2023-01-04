import React from "react";
import { Routes, Route } from "react-router-dom";
import mockNewsArticles from "../mockData/mockData";
import "./App.css";

function App() {
  console.log(mockNewsArticles.results);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
