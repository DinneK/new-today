import React from "react";
import "./TitleSearchForm.css";

const TitleSearchForm = ({ handleChange }) => {
  return (
    <div className="search-form">
      <input type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
};

export default TitleSearchForm;
