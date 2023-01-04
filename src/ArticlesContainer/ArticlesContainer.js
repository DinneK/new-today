import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import "./ArticlesContainer.css";

const ArticlesContainer = (articles) => {
  console.log({ articles });
  const articleCards = articles.articles.map((article) => {
    return (
      <ArticleCard
        id={article.uri}
        thumbnail={article.multimedia[2].url}
        title={article.title}
        section={article.section}
        publishedDate={article.published_date}
        byLine={article.byline}
        abstract={article.abstract}
      />
    );
  });
  return <section className="article-cards">{articleCards}</section>;
};

// A thumbnail URL
// Title
// Section
// Published date
// Byline
// Abstract
// Navigation to article details
//id
//key

export default ArticlesContainer;
