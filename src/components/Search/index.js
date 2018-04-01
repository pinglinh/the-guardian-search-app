import React from "react";
import SearchResults from "../SearchResults";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({ value });
    this.props.performSearch(value);
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
          <SearchResults articles={this.props.articles} />
        </div>
      </div>
    );
  }
}

export default Search;
