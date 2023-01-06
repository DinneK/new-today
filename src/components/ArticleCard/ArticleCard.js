import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({
  thumbnail,
  title,
  section,
  publishedDate,
  byLine,
  abstract,
}) => {
  const rawDate = publishedDate.slice(0, -15);
  const date = rawDate.split("-");
  const datePublished = [date[1], date[2], date[0]].join("/");
  const newsSection = section.toUpperCase();

  return (
    <article>
      <h2 className="news-section">Section: {newsSection}</h2>
      <img src={thumbnail} alt={`a poster of ${title}`} className="thumbnail" />
      <h3 className="article-title">{title}</h3>
      <h4 className="article-byline">{byLine}</h4>
      <h4 className="article-published">Published {datePublished}</h4>
      <h4 className="article-abstract">{abstract}</h4>
      <Link className="link-to-details" to={`/article/${publishedDate}`}>
        Click to View More Details
      </Link>
    </article>
  );
};

export default ArticleCard;
