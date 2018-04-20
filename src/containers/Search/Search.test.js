import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchContainer from "./";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/");

describe("Search container", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.exists()).toBe(true);
  });

  test("should update articles state", () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.state().articles).toEqual([]);
    wrapper.update();
    expect(wrapper.state().articles.length).toEqual(10);
  });
});
