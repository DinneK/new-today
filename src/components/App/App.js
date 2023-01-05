import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header.js";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer.js";
import SingleArticle from "../SingleArticle/SingleArticle.js";
import Footer from "../Footer/Footer.js";
import { getArticles } from "../../utilities/apiCall.js";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(`home`)
      .then((res) => {
        setArticles(res.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findSingleArticle = (publishedDate) => {
    return articles.filter((article) => {
      return article.published_date === publishedDate;
    });
  };

  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ArticlesContainer articles={articles} />}
        />
        <Route
          exact
          path="/article/:publishedDate"
          render={({ match }) => {
            const clickedArticle = findSingleArticle(
              match.params.publishedDate
            );
            return <SingleArticle singleArticle={clickedArticle} />;
          }}
        />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
