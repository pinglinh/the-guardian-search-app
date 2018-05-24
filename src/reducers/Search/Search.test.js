import { SearchReducer } from "./";
import { SEARCH_INPUT_VALUE, SET_ARTICLES } from "../../actions/Search";

describe("Search reducer", () => {
  const initialState = {
    articles: [],
    value: ""
  };

  it("should return the initial state", () => {
    expect(SearchReducer(undefined, {})).toEqual(initialState);
  });

  it("should store the user's search input", () => {
    const action = {
      type: SEARCH_INPUT_VALUE,
      value: "Hello"
    };

    expect(SearchReducer(initialState, action)).toEqual({
      ...initialState,
      value: "Hello"
    });
  });

  it("should store articles", () => {
    const articles = [{ title: "Harry Potter" }, { title: "Duck" }];

    const action = {
      type: SET_ARTICLES,
      articles
    };

    expect(SearchReducer(initialState, action)).toEqual({
      ...initialState,
      articles
    });
  });
});
