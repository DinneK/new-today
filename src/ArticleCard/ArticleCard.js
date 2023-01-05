import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({
  id,
  thumbnail,
  title,
  section,
  publishedDate,
  byLine,
  abstract,
  articles,
  // handleClick,
  // props,
}) => {
  const [singleArticle, setSingleArticle] = useState();

  const rawDate = publishedDate.slice(0, -15);
  const date = rawDate.split("-");
  const datePublished = [date[1], date[2], date[0]].join("/");
  const newsSection = section.toUpperCase();

  // console.log({ articles });

  // const handleClick = (event) => {
  //   // console.log(event.currentTarget.name);
  //   const newSingleArticle = articles.articles.find((article) => {
  //     return article.uri === event.currentTarget.name ? article : <p>Nein</p>;
  //   });
  //   console.log({ newSingleArticle });
  //   return newSingleArticle;
  // };

  // const showStory = (props) => {
  //   props.handleClick();
  // };

  return (
    <article>
      <h5 className="news-section">Section: {newsSection}</h5>
      <img src={thumbnail} alt={`a poster of ${title}`} className="thumbnail" />
      <h3 className="article-title">{title}</h3>
      <h4 className="article-byline">{byLine}</h4>
      <h4 className="article-published">Published {datePublished}</h4>
      <h4 className="article-abstract">{abstract}</h4>
      <Link to={`/article/${publishedDate}`}>
        {/* <button name={id} onClick={(event) => handleClick(event)}> */}
        Click
        {/* </button> */}
      </Link>
    </article>
  );
};

export default ArticleCard;
