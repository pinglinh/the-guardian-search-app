import React from "react";
import PropTypes from "prop-types";

const SearchResults = props => (
  <ul>
    {props.articles &&
      props.articles.map((article, index) => (
        <li key={index}>
          <a href={article.webUrl} target="_blank">
            {article.webTitle}
          </a>
        </li>
      ))}
  </ul>
);

SearchResults.propTypes = {
  articles: PropTypes.array
};

export default SearchResults;
