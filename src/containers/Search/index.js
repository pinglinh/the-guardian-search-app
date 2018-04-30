import { connect } from "react-redux";

import Search from "../../components/Search";

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  performSearch: event => ({
    dispatch({
      type: GET_ARTICLES,
      value: event.target.value
    })
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
