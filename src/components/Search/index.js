import React from "react";
import SearchResults from "../SearchResults";

const Search = props => {
  return (
    <div>
      <h1>The Guardian Search App</h1>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.value} onChange={props.handleChange} />
      </form>
      <div>
        <SearchResults articles={props.articles} />
      </div>
    </div>
  );
};

export default Search;
