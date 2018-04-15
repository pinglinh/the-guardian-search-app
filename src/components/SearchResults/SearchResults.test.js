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

describe("SearchResults component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchResults articles={mockArticles} />);

    expect(wrapper).toMatchSnapshot();
  });
});
