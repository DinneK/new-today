import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header.js";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer.js";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import SingleArticle from "../SingleArticle/SingleArticle.js";
import Footer from "../Footer/Footer.js";
import { getArticles } from "../utilities/apiCall.js";
import mockNewsArticles from "../mockData/mockData";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singleArticle, setSingleArticle] = useState();
  // const singleArticle = articles[0];
  // console.log({ singleArticle });

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

  // useEffect(() => {
  //   const newSingleArticle = articles.find(
  //     (article) => article.published_date === published_date
  //   );
  //   return newSingleArticle;
  // });

  // const handleClick = (event) => {
  //   // console.log(event.currentTarget.name);
  //   const newSingleArticle = articles.articles.find((article) => {
  //     return article.uri === event.currentTarget.name ? article : <p>Nein</p>;
  //   });
  //   console.log({ newSingleArticle });
  //   return setSingleArticle(newSingleArticle);
  // };

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
        {/* <Route
          path="article/:id"
          // render={() => <SingleArticle singleArticle={singleArticle} />}
        /> */}

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
