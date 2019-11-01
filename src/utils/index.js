import checkPropTypes from "check-prop-types";

export const FindTestValue = (component, value) => {
  const container = component.find(`[data-test='${value}']`);
  return container;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};


export const debounce = (fn, delay) => {
  //classic debounce function which accepts a callback function and delay
  let timer = null;
  return function (...args) {
      const context = this;
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(context, args);
      }, delay);
  };
};


//Localstorage methods

export const getLocalState = type => {
  try {
    const localState = localStorage.getItem(type);
    if (localState === null) {
      return [];
    }
    return JSON.parse(localState);
  } catch (err) {
    return [];
  }
};

export const addLocalState = (type, state) => {
  try {
    // Get the existing data
    const localState = localStorage.getItem(type);

    // If no existing data, create an array
    // Otherwise, merge the localStorage string to existing array
    const existing = localState
      ? [state, ...JSON.parse(localState)]
      : new Array(state);

    // Save back to localStorage
    localStorage.setItem(type, JSON.stringify(existing));
  } catch (err) {
    console.log(err);
  }
};

export const deleteLocalState = (type, id) => {
  try {
    //Create a new  array after removing the deleted value
    const localState = localStorage.getItem(type);
    if (localState === null) {
      return null;
    }
    const newLocalState = JSON.parse(localState).filter(function(obj) {
      return obj.id !== id;
    });

    localStorage.setItem(type, JSON.stringify(newLocalState));
  } catch (err) {
    console.log(err);
  }
};
//End of localstorage methods

//Search filter utility function 
//This will filter search based on watch list, fav list and api response data
//based on the user active menu status


export const SearchFilter = (
  searchValue,
  movieData,
  count,
  favMenu,
  watchMenu,
  favWatchData
) => {
  //Search input component filter
  //This will filter the search based on the fav, watch or home menu state
  //If home then it will be done on API result data
  //If it is on fav or watch menu, then from localstorage state value
  //Filter and show only the searched input text
  //Filtering is done on the movie title value.

  let movieArray = [];
  if (favMenu || watchMenu) {
    movieArray = favWatchData;
  } else {
    movieArray = movieData;
  }

  function checkInputValue(value) {
    if (value.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  }

  return movieArray.filter(checkInputValue).slice(0, count);
};

//End of the movie search filter