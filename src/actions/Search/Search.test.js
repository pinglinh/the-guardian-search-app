import * as SearchAction from "./";

describe("Search action", () => {
  it("it should create an action to get user's input value", () => {
    const text = "Hello";

    const expectedAction = {
      type: SearchAction.SEARCH_INPUT_VALUE,
      text
    };

    expect(SearchAction.inputValue(text)).toEqual(expectedAction);
  });

  it("it should create an action to set the articles", () => {
    const articles = ["hello", "hello"];

    const expectedAction = {
      type: SearchAction.SET_ARTICLES,
      articles
    };

    expect(SearchAction.receivedArticles(articles)).toEqual(expectedAction);
  });
});
