import React from "react";
import Search from "../../components/Search";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(event) {
    fetch(
      `http://content.guardianapis.com/search?q=${event}&api-key=3e6177a5-bcb1-493d-ad07-20c4fab62575`
    )
      .then(response => response.json())
      .then(data => this.setState({ articles: data.response.results }));
  }

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
