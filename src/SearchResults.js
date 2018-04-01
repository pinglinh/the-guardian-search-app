import React from "react";

const SearchResults = props => {
  return (
    <ul>
      {props.articles.map((article, index) => {
        return (
          <li key={index}>
            <a href={article.webUrl} target="_blank">
              {article.webTitle}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
