import { types } from "./types";
import axios from "axios";
import {
  getLocalState,
  addLocalState,
  deleteLocalState
} from "./../localStorage";
import SearchFilter from "./../searchFilter";

export const getMovies = (query = "gandhi") => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=7ceef1611488e1af83939c3725ad00d7&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(result => {
      dispatch({
        type: types.GET_MOVIES,
        payload: result.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getWatchList = () => {
  return {
    type: types.GET_WATCH_LIST,
    payload: getLocalState("watch")
  };
};

export const getFavList = () => {
  return {
    type: types.GET_FAV_LIST,
    payload: getLocalState("fav")
  };
};

export const getStorage = () => {
  return {
    type: types.GET_STORAGE,
    payload: { favList: getLocalState("fav"), watchList: getLocalState("fav") }
  };
};

export const getStorageAdd = (type, val) => {
  addLocalState(type, val);
  return {
    type: types.GET_STORAGE_ADD,
    payload: null
  };
};

export const getStorageDelete = (type, val) => {
  deleteLocalState(type, val);
  return {
    type: types.GET_STORAGE_DEL,
    payload: null
  };
};

export const getStorageSearch = (
  searchValue,
  movieData,
  count,
  favMenu,
  watchMenu,
  favWatchData
) => {
  const filterData = SearchFilter(
    searchValue,
    movieData,
    count,
    favMenu,
    watchMenu,
    favWatchData
  );
  return {
    type: types.GET_STORAGE_SEARCH,
    payload: { watchMenu: watchMenu, favMenu: favMenu, results: filterData }
  };
};
