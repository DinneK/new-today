import React from "react";
import "./TitleSearchForm.css";

const TitleSearchForm = ({ handleChange, searchTerm }) => {
  const handleClear = () => {
    searchTerm("");
  };

  return (
    <div className="search-form">
      <form>
        <input
          className="title-search-input"
          type="text"
          placeholder="Search By Title"
          onChange={handleChange}
        />
        <button className="clear-button" onClick={() => handleClear()}>
          Clear Search
        </button>
      </form>
    </div>
  );
};

export default TitleSearchForm;
