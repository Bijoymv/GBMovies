import { types } from "../../actions/types";
import getsReducer from "./reducer";

describe("Gets Reducer Test", () => {
  const initialstate = {
    favMenu: false,
    watchMenu: false,
    favList: [],
    watchList: [],
    results: []
  };

  it("Should return default state", () => {
    const newState = getsReducer(undefined, {});
    expect(newState).toEqual(initialstate);
  });

  it("Should return new state if receiving type GET_MOVIES", () => {
    const actionresult = {
      popularity: 432.456,
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      title: "Joker",
      overview: "During the 1980s.",
      id: 123
    };
    const gets = {
      results: actionresult,
      favMenu: false,
      watchMenu: false,
      favList: [],
      watchList: []
    };
    const newState = getsReducer(undefined, {
      type: types.GET_MOVIES,
      payload: actionresult
    });
    expect(newState).toEqual(gets);
  });

  it("Should return new state if receiving type GET_FAV_LIST and payload empty", () => {
    const gets = {
      results: [],
      favMenu: true,
      watchMenu: false,
      favList: [],
      watchList: []
    };
    const newState = getsReducer(undefined, {
      type: types.GET_FAV_LIST,
      payload: []
    });
    expect(newState).toEqual(gets);
  });

  it("Should return new state if receiving type GET_WATCH_LIST and payload empty", () => {
    const gets = {
      favMenu: false,
      watchMenu: true,
      favList: [],
      watchList: [],
      results: []
    };
    const newState = getsReducer(undefined, {
      type: types.GET_WATCH_LIST,
      payload: []
    });
    expect(newState).toEqual(gets);
  });

  it("Should return new state if receiving type GET_WATCH_LIST", () => {
    const actionresult = {
      popularity: 432.456,
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      title: "Joker",
      overview: "During the 1980s.",
      id: 123
    };
    const gets = {
      results: actionresult,
      favMenu: false,
      watchMenu: true,
      favList: [],
      watchList: actionresult
    };
    const newState = getsReducer(undefined, {
      type: types.GET_WATCH_LIST,
      payload: actionresult
    });
    expect(newState).toEqual(gets);
  });

  it("Should return new state if receiving type GET_FAV_LIST", () => {
    const actionresult = {
      popularity: 432.456,
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      title: "Joker",
      overview: "During the 1980s.",
      id: 123
    };
    const gets = {
      results: actionresult,
      favMenu: true,
      watchMenu: false,
      watchList: [],
      favList: actionresult
    };
    const newState = getsReducer(undefined, {
      type: types.GET_FAV_LIST,
      payload: actionresult
    });
    expect(newState).toEqual(gets);
  });
});

it("Should return new state if receiving type GET_STORAGE", () => {
  const favresult = {
    popularity: 432.456,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    title: "Joker",
    overview: "During the 1980s.",
    id: 123
  };

  const watchresult = {
    popularity: 4322.456,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    title: "Joker2",
    overview: "During the 1980ssdsd.",
    id: 12333
  };

  const payload = { favList: favresult, watchList: watchresult };

  const gets = {
    favList: favresult,
    watchList: watchresult,
    favMenu: false,
    watchMenu: false,
    results: []
  };
  const newState = getsReducer(undefined, {
    type: types.GET_STORAGE,
    payload: payload
  });
  expect(newState).toEqual(gets);
});

it("Should return new state if receiving type GET_STORAGE_SEARCH", () => {
  const watchresult = {
    popularity: 4322.456,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    title: "Joker2",
    overview: "During the 1980ssdsd.",
    id: 12333
  };

  const payload = { watchMenu: true, favMenu: false, results: watchresult };

  const gets = {
    favList: [],
    watchList: [],
    favMenu: false,
    watchMenu: true,
    results: watchresult
  };

  const newState = getsReducer(undefined, {
    type: types.GET_STORAGE_SEARCH,
    payload: payload
  });
  expect(newState).toEqual(gets);
});

it("Should return new state if receiving type GET_STORAGE_ADD", () => {
  const payload = null;

  const gets = {
    favMenu: false,
    watchMenu: false,
    favList: [],
    watchList: [],
    results: []
  };

  const newState = getsReducer(undefined, {
    type: types.GET_STORAGE_ADD,
    payload: payload
  });
  expect(newState).toEqual(gets);
});

it("Should return new state if receiving type GET_STORAGE_DEL", () => {
  const payload = null;

  const gets = {
    favMenu: false,
    watchMenu: false,
    favList: [],
    watchList: [],
    results: []
  };

  const newState = getsReducer(undefined, {
    type: types.GET_STORAGE_DEL,
    payload: payload
  });
  expect(newState).toEqual(gets);
});
