import React from "react";
import PropTypes from "prop-types";
import SearchResults from "../SearchResults";

const Search = props => {
  return (
    <div>
      <h1>The Guardian Search App</h1>
      <form onSubmit={event => props.handleSubmit(event, props.value)}>
        <input type="text" value={props.value} onChange={props.handleChange} />
      </form>
      <div>
        <SearchResults articles={props.articles} />
      </div>
    </div>
  );
};

Search.propTypes = {
  performSearch: PropTypes.func,
  articles: PropTypes.array
};

export default Search;
