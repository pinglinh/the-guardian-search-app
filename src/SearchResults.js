import React from "react";

const SearchResults = props => (
  <ul>
    {props.articles.map((article, index) => (
      <li key={index}>
        <a href={article.webUrl} target="_blank">
          {article.webTitle}
        </a>
      </li>
    ))}
  </ul>
);

export default SearchResults;
