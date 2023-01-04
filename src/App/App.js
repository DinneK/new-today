import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.js";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer.js";
import Footer from "../Footer/Footer.js";
import mockNewsArticles from "../mockData/mockData";
import "./App.css";

function App() {
  const [articles, setArticles] = useState(mockNewsArticles.results);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesContainer articles={articles} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
