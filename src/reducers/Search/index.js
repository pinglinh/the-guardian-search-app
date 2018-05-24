import { SEARCH_INPUT_VALUE, SET_ARTICLES } from "../../actions/Search";

const initialState = {
  articles: [],
  value: ""
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_VALUE:
      return { ...state, value: action.value };
    case SET_ARTICLES:
      return { ...state, articles: action.articles };
    default:
      return state;
  }
};

// export const SearchReducer = (state = initialState, action) => {
//   if (action.type === SEARCH_INPUT_VALUE) {
//     return Object.assign({}, state, { value: action.value });
//   }
//   return state;
// };
