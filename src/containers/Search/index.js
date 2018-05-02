import { connect } from "react-redux";

import { SEARCH_INPUT_VALUE } from "../../actions/Search";

import API from "../../actions/Search";

import Search from "../../components/Search";

const mapStateToProps = state => ({
  articles: state.articles,
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => {
    dispatch({
      type: SEARCH_INPUT_VALUE,
      value: event.target.value
    });
  },
  handleSubmit: (event, query) => {
    event.preventDefault();
    API.getArticles(dispatch, query);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
