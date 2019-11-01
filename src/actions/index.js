import { types } from "./types";
import axios from "axios";
import { getLocalState } from "./../localStorage";

export const getMovies = () => async dispatch => {
  await axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=7ceef1611488e1af83939c3725ad00d7&language=en-US&page=1&include_adult=false&query=gandhi"
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
