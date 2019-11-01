import React from "react";
import { shallow } from "enzyme";
import { FindTestValue, checkProps } from "./../../utils";
import MovieList from "./index";

const getComponent = (props = {}) => {
  const component = shallow(<MovieList {...props} />);
  return component;
};

describe("MovieList component", () => {
  describe("Checking props types", () => {
    it("Should not through a warning", () => {
      const handleSubmit = jest.fn();
      const expectedProps = {
        popularity: 432.456,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: [],
        watchList: []
      };

      const propsErr = checkProps(MovieList, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("MovieList component with valid props value", () => {
    let component;
    beforeEach(() => {
      const handleSubmit = jest.fn();
      const props = {
        popularity: 432.456,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit
      };
      component = getComponent(props);
    });

    it("Should render without errors", () => {
      const container = FindTestValue(component, "component-movielist-li");
      expect(container.length).toBe(1);
    });
    it("Should render the poster image", () => {
      const container = FindTestValue(component, "component-movielist-img");
      expect(container.length).toBe(1);
    });
    it("Should not render the default poster image", () => {
      const container = FindTestValue(
        component,
        "component-movielist-img-default"
      );
      expect(container.length).toBe(0);
    });
    it("Should render the title", () => {
      const container = FindTestValue(component, "component-movielist-title");
      expect(container.length).toBe(1);
    });
    it("Should render the overview", () => {
      const container = FindTestValue(component, "component-movielist-text");
      expect(container.length).toBe(1);
    });

    it("Should render the good movie label", () => {
      const container = FindTestValue(component, "component-movielist-good");
      expect(container.length).toBe(1);
    });

    it("Should not render the bad movie label", () => {
      const container = FindTestValue(component, "component-movielist-bad");
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie popularity less tban 2", () => {
    let component;
    beforeEach(() => {
      const handleSubmit = jest.fn();
      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: [],
        watchList: []
      };
      component = getComponent(expectedProps);
    });

    it("Should render the bad movie label", () => {
      const container = FindTestValue(component, "component-movielist-bad");
      expect(container.length).toBe(1);
    });
    it("Should not render the good movie label", () => {
      const container = FindTestValue(component, "component-movielist-good");
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie in user watchlist", () => {
    let component;
    beforeEach(() => {});

    it("Should not render watch later button", () => {
      const handleSubmit = jest.fn();
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: [],
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-watch");
      expect(container.length).toBe(0);
    });

    it("Should not render watch later if inside fav menu", () => {
      const handleSubmit = jest.fn();
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: true,
        watchMenu: false,
        favList: [],
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-watch");
      expect(container.length).toBe(0);
    });

    it("Should not render watch later if inside watch menu", () => {
      const handleSubmit = jest.fn();
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: true,
        favList: [],
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-watch");
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie not in user watchlist", () => {
    let component;
    beforeEach(() => {});

    it("Should render watch later button", () => {
      const handleSubmit = jest.fn();
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];
      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: [],
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-watch");
      expect(container.length).toBe(1);
    });

    it("Should not render watch later if inside fav menu", () => {
      const handleSubmit = jest.fn();
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: true,
        watchMenu: false,
        favList: [],
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-watch");
      expect(container.length).toBe(0);
    });

    it("Should not render watch later if inside watch menu", () => {
      const handleSubmit = jest.fn();
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: true,
        favList: [],
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-watch");
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie not in user favList", () => {
    let component;

    it("Should render add fav button", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];
      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: favList,
        watchList: []
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav");
      expect(container.length).toBe(1);
    });

    it("Should not render fav button if inside fav menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: true,
        watchMenu: false,
        favList: favList,
        watchList: []
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav");
      expect(container.length).toBe(0);
    });

    it("Should not render fav button if inside watch menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: true,
        favList: favList,
        watchList: []
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav");
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie in user favList", () => {
    let component;

    it("Should not render add fav button", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: favList,
        watchList: []
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav");
      expect(container.length).toBe(0);
    });

    it("Should not render fav button if inside fav menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: true,
        watchMenu: false,
        favList: favList,
        watchList: []
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav");
      expect(container.length).toBe(0);
    });

    it("Should not render fav button if inside watch menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 12345
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: true,
        favList: favList,
        watchList: []
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav");
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie in user favList and watch list", () => {
    let component;

    it("Should not render delete fav or delete watch buttons if inside home", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: favList,
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav-del");
      expect(container.length).toBe(0);
      const containerWatch = FindTestValue(
        component,
        "component-movielist-watch-del"
      );
      expect(containerWatch.length).toBe(0);
    });

    it("Should  render delete fav button if inside fav menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: true,
        watchMenu: false,
        favList: favList,
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav-del");
      expect(container.length).toBe(1);
    });

    it("Should not render fav delete button if inside watch menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: true,
        favList: favList,
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(component, "component-movielist-fav-del");
      expect(container.length).toBe(0);
    });

    it("Should render watch delete button if inside watch menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: true,
        favList: favList,
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(
        component,
        "component-movielist-watch-del"
      );
      expect(container.length).toBe(1);
    });

    it("Should not render watch delete button if inside fav menu", () => {
      const handleSubmit = jest.fn();
      const favList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];
      const watchList = [
        {
          popularity: 4,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          title: "Joker",
          overview: "During the 1980s.",
          id: 1234
        }
      ];

      const expectedProps = {
        popularity: 1,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: true,
        watchMenu: false,
        favList: favList,
        watchList: watchList
      };
      component = getComponent(expectedProps);
      const container = FindTestValue(
        component,
        "component-movielist-watch-del"
      );
      expect(container.length).toBe(0);
    });
  });

  describe("MovieList component with movie poster_path empty", () => {
    let component;
    beforeEach(() => {
      const handleSubmit = jest.fn();
      const props = {
        popularity: 1,
        poster_path: null,
        title: "Joker",
        overview: "During the 1980s.",
        id: 1234,
        clickButton: handleSubmit,
        favMenu: false,
        watchMenu: false,
        favList: [],
        watchList: []
      };
      component = getComponent(props);
    });

    it("Should render the default poster image", () => {
      const container = FindTestValue(
        component,
        "component-movielist-img-default"
      );
      expect(container.length).toBe(1);
    });
  });

  describe("MovieList component without props value", () => {
    let component;
    beforeEach(() => {
      component = getComponent();
    });
    it("Should not render movielist row if title is missing", () => {
      const container = FindTestValue(component, "component-movielist-li");
      expect(container.length).toBe(0);
    });
  });
});
