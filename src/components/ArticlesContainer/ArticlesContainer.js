import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import "./ArticlesContainer.css";

const ArticlesContainer = ({ articles, searchTerm }) => {
  let articleCards;
  if (searchTerm !== "") {
    articleCards = articles.filter((article) =>
      article.title.toLowerCase().startsWith(searchTerm)
    );
  } else {
    articleCards = articles;
  }
  const displayedArticles = articleCards.map((article) => {
    return (
      <ArticleCard
        id={article.uri}
        key={article.uri}
        thumbnail={article.multimedia[2].url}
        title={article.title}
        section={article.section}
        publishedDate={article.published_date}
        byLine={article.byline}
        abstract={article.abstract}
        articles={articles}
      />
    );
  });

  return (
    <section className="article-cards">
      {displayedArticles.length ? (
        displayedArticles
      ) : (
        <p>Ooopsy You're Wrong!</p>
      )}
    </section>
  );
};

export default ArticlesContainer;
