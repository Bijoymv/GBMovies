import React from "react";
import Header from "./component/header";
import MovieList from "./component/movielist";
import { connect } from "react-redux";
import Search from "./component/search";
import { debounce } from "./utils";
import {
  getMovies,
  getWatchList,
  getFavList,
  getStorage,
  getStorageAdd,
  getStorageDelete,
  getStorageSearch
} from "./actions";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    //Get the movie results and the storage status in the begining of the app load
    this.props.getMovies();
    this.props.getStorage();
  }

  fetchMovies = debounce(query => {
    //API triggers are limited by the debounce function to reduce network calls
    //This method is triggered from input search box when user enter the search input
    this.props.getMovies(query);
  }, 500);

  onSearchChange(ev) {
    //Input change in the text box will trigger this event method
    //Default search input is set as "gandhi"
    ev.stopPropagation();
    let query = ev.target.value;
    if (query === "") {
      query = "gandhi";
    }
    //If user in fav or watch menu don't call api, just search in the localstorage
    if (this.props.gets.favMenu || this.props.gets.watchMenu) {
      const menuData = this.props.gets.favMenu
        ? this.props.gets.favList
        : this.props.gets.watchList;

      this.props.getStorageSearch(
        ev.target.value,
        this.props.gets.results,
        20,
        this.props.gets.favMenu,
        this.props.gets.watchMenu,
        menuData
      );
    } else {
      //If user in fav or watch menu call search API with user query values
      this.fetchMovies(query);
    }
  }

  handleClick = type => {
    //Method triggered from the header component
    //This will show the contents based on the user menu selection
    switch (type) {
      case "watch_list":
        this.props.getWatchList();
        break;
      case "fav_list":
        this.props.getFavList();
        break;
      default:
        this.props.getMovies();
    }
  };

  handleSubmit = (type, val) => {
    //Method triggered from the movielist component
    //This will add or delete the user selected watch list or fav contents to localstorage
    switch (type) {
      case "watch_add":
        this.props.getStorageAdd("watch", val);
        this.props.getWatchList();
        break;
      case "fav_add":
        this.props.getStorageAdd("fav", val);
        this.props.getFavList();
        break;
      case "fav_del":
        this.props.getStorageDelete("fav", val);
        if (this.props.gets.favMenu) {
          this.props.getFavList();
        }
        break;
      case "watch_del":
        this.props.getStorageDelete("watch", val);
        if (this.props.gets.watchMenu) {
          this.props.getWatchList();
        }
        break;
      default:
        console.log("handleSubmit default action called.");
    }
  };

  render() {
    //This will render the contents based on the search results
    //We are expecting the contents should be in the format of array of objects with gets state as key.
    const { gets } = this.props;
    const data = gets.results;
    return (
      <div className="App" data-test="App-container">
        <Header
          clickMenu={this.handleClick}
          favMenu={gets.favMenu}
          watchMenu={gets.watchMenu}
        />
        <Search searchChange={this.onSearchChange} />

        {data.length > 0 && (
          <div data-test="App-movielist-container">
            {data.map((get, index) => {
              const { popularity, poster_path, title, overview, id } = get;
              const movieListItems = {
                popularity: popularity,
                poster_path: poster_path,
                title: title,
                overview: overview,
                id: id,
                clickButton: this.handleSubmit,
                favMenu: gets.favMenu,
                watchMenu: gets.watchMenu,
                favList: gets.favList,
                watchList: gets.watchList
              };
              return <MovieList key={index} {...movieListItems} />;
            })}
          </div>
        )}
        {data.length === 0 && (
          <div className="App-nocontent" data-test="App-nocontent">
            Sorry, No Content Available!!!
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Redux method
  return {
    gets: state.gets
  };
};

export default connect(
  // Redux method
  mapStateToProps,
  {
    getMovies,
    getWatchList,
    getFavList,
    getStorage,
    getStorageAdd,
    getStorageDelete,
    getStorageSearch
  }
)(App);
