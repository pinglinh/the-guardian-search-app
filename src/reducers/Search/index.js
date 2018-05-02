import { SEARCH_INPUT_VALUE, SET_ARTICLES } from "../../actions/Search";

const initialState = {
  articles: [],
  value: ""
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_VALUE:
      return Object.assign({}, state, { value: action.value });
    case SET_ARTICLES:
      return Object.assign({}, state, { articles: action.articles });
    default:
      return state;
  }
};

export default SearchReducer;
