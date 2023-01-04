import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({
  id,
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
      <h5 className="news-section">Section: {newsSection}</h5>
      <img src={thumbnail} alt={`a poster of ${title}`} className="thumbnail" />
      <h3 className="article-title">{title}</h3>
      <h4 className="article-byline">{byLine}</h4>
      <h4 className="article-published">Published {datePublished}</h4>
      <h4 className="article-abstract">{abstract}</h4>
    </article>
  );
};

export default ArticleCard;
