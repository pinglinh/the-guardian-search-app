import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Search from "./";
import Adapter from "enzyme-adapter-react-16";

import { loadFromServer } from "./";
import fetch from "jest-fetch-mock";

Enzyme.configure({ adapter: new Adapter() });

describe("Search container", () => {

  test("does render", () {
    const wrapper
  })

  test("should work", () => {
    const fakePerformSearch = jest.fn();

    const component = shallow(<Search performSearch={fakePerformSearch} />);

    expect(fakePerformSearch).toHaveBeenCalled();

    // fetch.mockResponse(
    //   JSON.stringify({ greeting: "HelloWorld!" }, { status: 200 })
    // );
    //
    // return loadFromServer(successMock).then(() => {
    //   expect(successMock.mock.calls.length).toBe(1);
    // });
  });
});
