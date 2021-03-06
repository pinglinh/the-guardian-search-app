import React from "react";
import Search from "../../components/Search";

import fetchArticles from "../../api";

class SearchContainer extends React.Component {
  state = {
    articles: []
  };

  // performSearch = event => {
  //   fetch(
  //     `http://content.guardianapis.com/search?q=${event}&api-key=${API_KEY}`
  //   )
  //     .then(response => response.json())
  //     .then(data => this.setState({ articles: data.response.results }));
  // };

  performSearch = event => {
    return fetchArticles(event).then(data =>
      this.setState({ articles: data.response.results })
    );
  };

  render() {
    return (
      <Search
        performSearch={this.performSearch}
        articles={this.state.articles}
      />
    );
  }
}

export default SearchContainer;
