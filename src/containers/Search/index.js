import { connect } from "react-redux";

import getArticles, { inputValue } from "../../actions/Search";

import Search from "../../components/Search";

const mapStateToProps = state => ({
  articles: state.articles,
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => {
    return dispatch(inputValue(event.target.value));
  },
  handleSubmit: (event, query) => {
    event.preventDefault();
    return dispatch(getArticles(query));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
