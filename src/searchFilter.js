function SearchFilter(
  searchValue,
  movieData,
  count,
  favMenu,
  watchMenu,
  favWatchData
) {
  //Search input component filter
  //This will filter the search based on the fav, watch or home menu state
  //If home then it will be done on API result data
  //If it is on fav or watch menu, then from localstorage state value
  //Filter and show only the searched input test
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
}

export default SearchFilter;
