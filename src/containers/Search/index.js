import React from "react";
import Search from "../../components/Search";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      articles: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    fetch(
      `http://content.guardianapis.com/search?q=${
        event.target.value
      }&api-key=3e6177a5-bcb1-493d-ad07-20c4fab62575`
    )
      .then(response => response.json())
      .then(data => this.setState({ articles: data.response.results }));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Search
        value={this.state.value}
        articles={this.state.articles}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;
