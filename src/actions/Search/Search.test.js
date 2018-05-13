import * as SearchAction from "./";
import { API_KEY } from "../../../config";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

describe("Search action", () => {
  it("should create an action to get user's input value", () => {
    const text = "Hello";

    const expectedAction = {
      type: SearchAction.SEARCH_INPUT_VALUE,
      text
    };

    expect(SearchAction.inputValue(text)).toEqual(expectedAction);
  });

  it("should create an action to set the articles", () => {
    const articles = ["hello", "hello"];

    const expectedAction = {
      type: SearchAction.SET_ARTICLES,
      articles
    };

    expect(SearchAction.receivedArticles(articles)).toEqual(expectedAction);
  });

  it("should create SET_ARTICLES when fetching articles has been done", () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const query = "hello";

    fetchMock.getOnce(
      `http://content.guardianapis.com/search?q=${query}&api-key=${API_KEY}`,
      {
        body: {
          response: {
            results: ["hello this should be a results of objects btw"]
          }
        },
        headers: {
          "content-type": "application/json"
        }
      }
    );

    const expectedAction = {
      type: SearchAction.SET_ARTICLES,
      articles: ["hello this should be a results of objects btw"]
    };

    const store = mockStore({});

    return store.dispatch(SearchAction.getArticles(query)).then(() => {
      console.log(store.getActions());
      expect(store.getActions()).toEqual([expectedAction]);
      // can also do getActions and make expectedAction into []
    });
  });
});
