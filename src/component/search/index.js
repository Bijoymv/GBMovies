import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Search = props => {
  const handleChangeEvent = event => {
    props.searchChange(event);
  };

  return (
    <div className="component-search-input">
      <div>
        <input
          onChange={handleChangeEvent}
          placeholder="Search good and bad movies by name or title..."
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  searchChange: PropTypes.func
};

export default Search;
