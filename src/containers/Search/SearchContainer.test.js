import React from "react";
import { configure, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";

import { SET_ARTICLES, SEARCH_INPUT_VALUE } from "../../actions/Search";

import SearchComponent from "../../components/Search";
import SearchContainer from "./";

jest.mock("../../actions/Search", () => ({
  inputValue: jest.fn(),
  receivedArticles: jest.fn(),
  getArticles: jest.fn()
}));

import {
  inputValue,
  receivedArticles,
  getArticles
} from "../../actions/Search";

const mockStore = configureMockStore([thunk]);

configure({ adapter: new Adapter() });

describe("SearchContainer", () => {
  let wrapper;
  let store;

  const articles = [
    {
      title: "Hello",
      webUrl: "Foo"
    }
  ];

  beforeEach(() => {
    const state = {
      value: "foo",
      articles
    };

    store = mockStore(state);

    wrapper = mount(<SearchContainer store={store} />);
  });

  it("should get the initial value state", () => {
    expect(wrapper.find(SearchComponent).props().value).toBe("foo");
  });

  it("should get the initial articles state", () => {
    expect(wrapper.find(SearchComponent).props().articles).toEqual(articles);
  });

  it("maps handleChange to dispatch inputValue action", () => {
    wrapper.props().handleChange();

    expect(store.dispatch).toHaveBeenCalledWith({ type: SEARCH_INPUT_VALUE });
  });

  // fit("should dispatch getArticles action when handleSubmit method is called", () => {
  //   wrapper.find("form").simulate("submit");
  //   console.log(getArticles);
  //   const actions = store.getActions();
  //
  //   inputValue.mockReturnValue({
  //     type: "thunkMock"
  //   });
  //
  //   receivedArticles.mockReturnValue({
  //     type: "thunkMock"
  //   });
  //
  //   getArticles.mockReturnValue({
  //     type: "thunkMock"
  //   });
  //
  //   expect(actions).toEqual([{}]);
  // });
});
