import { GET_ARTICLES } from "../../actions/Search";

const initialState = {
  articles: []
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state, { articles: action.value });
    default:
      return state;
  }
};

export default SearchReducer;
