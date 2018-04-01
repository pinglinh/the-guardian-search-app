import React from "react";
import SearchResults from "./SearchResults";

export class Search extends React.Component {
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
      <div>
        <h1>The Guardian Search App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div>
          <SearchResults articles={this.state.articles} />
        </div>
      </div>
    );
  }
}
