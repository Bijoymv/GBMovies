import React from "react";
import Header from "./component/header";
import MovieList from "./component/movielist";
import { connect } from "react-redux";
import { deleteLocalState } from "./localStorage";
import Search from "./component/search";
import debounce from "./debounce";
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
    this.props.getMovies();
    this.props.getStorage();
  }

  fetchMovies = debounce(query => {
    this.props.getMovies(query);
  }, 500);

  onSearchChange(ev) {
    let query = ev.target.value;
    if (query === "") {
      query = "gandhi";
    }

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
      this.fetchMovies(query);
    }
  }

  handleClick = type => {
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
    const { gets } = this.props;
    const data = gets.results;
    return (
      <div className="App">
        <Header
          clickMenu={this.handleClick}
          favMenu={gets.favMenu}
          watchMenu={gets.watchMenu}
        />
        <Search searchChange={this.onSearchChange} />

        {data.length > 0 && (
          <div>
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
  return {
    gets: state.gets
  };
};

export default connect(
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
