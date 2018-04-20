import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchContainer from "./";
import Search from "../../components/Search/";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/");

describe("Search container", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.exists()).toBe(true);
  });

  test("should update articles state", done => {
    const wrapper = mount(<SearchContainer />);

    expect(wrapper.state().articles).toEqual([]);

    wrapper.update();

    setTimeout(() => {
      expect(wrapper.state().articles.length).toEqual(10);
      done();
    }, 2000);
  });
});
