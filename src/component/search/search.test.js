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
    it("Should not through a warning", () => {
      const searchChange = jest.fn();
      const expectedProps = {
        clickMenu: searchChange
      };

      const propsErr = checkProps(Search, expectedProps);
      expect(propsErr).toBeUndefined();
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
