import React from "react";
import { Link } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = ({ singleArticle, clearResults }) => {
  const rawPublishedDate = singleArticle[0].published_date.slice(0, -15);
  const date = rawPublishedDate.split("-");
  const datePublished = [date[1], date[2], date[0]].join("/");
  const rawUpdatedDate = singleArticle[0].updated_date.slice(0, -15);
  const update = rawUpdatedDate.split("-");
  const dateUpdated = [update[1], update[2], update[0]].join("/");
  const newsSection = singleArticle[0].section.toUpperCase();
  const newsSubsectionSection =
    singleArticle[0].subsection.charAt(0).toUpperCase() +
    singleArticle[0].subsection.slice(1);

  return (
    <section className="single-article-container">
      <div className="single-article-details">
        <div className="single-article-story">
          <h2 className="single-article-title">{singleArticle[0].title}</h2>
          <h3 className="single-article-byline">{singleArticle[0].byline}</h3>
          <h4 className="single-article-subdetails">
            {newsSubsectionSection} in Section: {newsSection}
          </h4>
          <h4 className="single-article-subdetails">
            Published: {datePublished}
          </h4>
          <h4 className="single-article-subdetails">
            Updated On: {dateUpdated}
          </h4>
          <h3 className="single-article-abstract">
            {singleArticle[0].abstract}
          </h3>
          <a
            className="story-link"
            target="_blank"
            href={singleArticle[0].short_url}
          >
            Get the Full Story Here
          </a>
          <Link className="home-button-container" to="/">
            <button className="home-button" onClick={() => clearResults()}>
              HOME
            </button>
          </Link>
        </div>
        <div className="single-article-image-details">
          <img
            src={singleArticle[0].multimedia[1].url}
            alt={singleArticle[0].title}
            className="single-article-image"
          />
          <h4 className="single-article-caption">
            {singleArticle[0].multimedia[1].caption}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
