import React from "react";
import Enzyme, { shallow } from "enzyme";
import SearchResults from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockArticles = [
  {
    webUrl: "http://google.com",
    webTitle: "This is Google"
  }
];

const mockEmptyArticles = [];

describe("SearchResults component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchResults articles={mockArticles} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("returns the default empty array when there is no data to map through or what would happen when I render the component with no data", () => {
    const wrapper = shallow(<SearchResults articles={mockEmptyArticles} />);

    expect(wrapper).toMatchSnapshot();
  });
});
