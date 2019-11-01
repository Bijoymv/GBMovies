import React from "react";
import { shallow } from "enzyme";
import { FindTestValue, checkProps } from "./../../utils";
import Search from "./index";

const getComponent = (props = {}) => {
  const component = shallow(<Search {...props} />);
  return component;
};

describe("Search component", () => {
  describe("Checking props types", () => {

    let component;
    let mockFuncChange;
    beforeEach(() => {
      mockFuncChange = jest.fn();
      const props = {
        searchChange: mockFuncChange
      };
      component = getComponent(props);
    });

    it("Should not through a warning", () => {
      const expectedProps = {
        searchChange: mockFuncChange
      };
      const propsErr = checkProps(Search, expectedProps);
      expect(propsErr).toBeUndefined();
    });

    it("Should call the callback function on change event", () => {
      const container = FindTestValue(component, "component-search-input-text");
      container.simulate("change");
      container.simulate("change");
      const callback = mockFuncChange.mock.calls.length;
      expect(callback).toBe(2);
    });
  });

  describe("Search component without props value", () => {
    let component;
    beforeEach(() => {
      component = getComponent();
    });
    it("Should not render the search", () => {
      const container = FindTestValue(component, "component-search-input");
      expect(container.length).toBe(0);
    });
  });
});
