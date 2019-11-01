import React from "react";
import { shallow } from "enzyme";
import { FindTestValue, testStore } from "./utils";
import App from "./App";

const getComponent = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("App component", () => {
  describe("Checking if we get a valid results", () => {
    let component;
    beforeEach(() => {
      const actionresult = [
        {
          popularity: 432.456,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 123
        },
        {
          popularity: 432.456,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker2",
          overview: "During the 1980s.dddd",
          id: 1234
        }
      ];

      const values = {
        results: actionresult,
        favMenu: false,
        watchMenu: false,
        favList: [],
        watchList: []
      };

      const initialState = {
        gets: values
      };

      component = getComponent(initialState);
    });

    it("Should render without errors", () => {
      const container = FindTestValue(component, "App-container");
      expect(container.length).toBe(1);
    });

    it("Should not render error message", () => {
      const container = FindTestValue(component, "App-nocontent");
      expect(container.length).toBe(0);
    });
  });

  
});
