import { types } from "../../actions/types";

const initialstate = {
  favMenu: false,
  watchMenu: false,
  favList: [],
  watchList: [],
  results: []
};

export default (state = initialstate, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.GET_MOVIES:
      newState.favMenu = false;
      newState.watchMenu = false;
      newState.results = action.payload;
      return newState;
    case types.GET_WATCH_LIST:
      newState.favMenu = false;
      newState.watchMenu = true;
      newState.results = action.payload;
      newState.watchList = action.payload;
      return newState;
    case types.GET_FAV_LIST:
      newState.favMenu = true;
      newState.watchMenu = false;
      newState.results = action.payload;
      newState.favList = action.payload;
      return newState;
    case types.GET_STORAGE:
      newState.favList = action.payload.favList;
      newState.watchList = action.payload.watchList;
      return newState;
    case types.GET_STORAGE_SEARCH:
      newState.favMenu = action.payload.favMenu;
      newState.watchMenu = action.payload.watchMenu;
      newState.results = action.payload.results;
      return newState;
    case types.GET_STORAGE_ADD:
    case types.GET_STORAGE_DEL:
      return newState;
    default:
      return newState;
  }
};
