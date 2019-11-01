import React from "react";
import PropTypes from "prop-types";
import { Media, ButtonToolbar, Badge, Button } from "react-bootstrap";
import defaultPoster from "./../../assets/defaultPoster.jpeg";
import "./style.css";

const MovieList = props => {
  const {
    popularity,
    poster_path,
    title,
    overview,
    id,
    clickButton,
    favMenu,
    watchMenu,
    favList,
    watchList
  } = props;

  if (!title) {
    return false;
  }

  const submitButton = (type, obj) => {
    if (clickButton) {
      clickButton(type, obj);
    }
  };

  const checkIfExist = (arr = [], id) => {
    function checkEntry(element) {
      return element.id === id;
    }

    return arr.some(checkEntry);
  };

  const movieItems = {
    popularity,
    poster_path,
    title,
    overview,
    id
  };

  return (
    <ul className="list-unstyled" data-test="component-movielist-ul">
      <Media
        as="li"
        className="component-movielist-li"
        data-test="component-movielist-li"
      >
        {poster_path && (
          <img
            className="ml-2 mr-3 component-movielist-img"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            data-test="component-movielist-img"
          />
        )}
        {!poster_path && (
          <img
            className="ml-2 mr-3 component-movielist-img"
            src={defaultPoster}
            alt={title}
            data-test="component-movielist-img-default"
          />
        )}

        <Media.Body>
          <h5
            className="component-movielist-title"
            data-test="component-movielist-title"
          >
            {title}
          </h5>
          <p
            className="component-movielist-text"
            data-test="component-movielist-text"
          >
            {popularity > 2 && (
              <Badge
                variant="info"
                className="mr-2"
                data-test="component-movielist-good"
              >
                Good Movie
              </Badge>
            )}
            {popularity < 2 && (
              <Badge
                variant="secondary"
                className="mr-2"
                data-test="component-movielist-bad"
              >
                Bad Movie
              </Badge>
            )}
            {overview}
          </p>

          <ButtonToolbar>
            {!checkIfExist(watchList, id) && !favMenu && !watchMenu && (
              <Button
                variant="outline-warning"
                onClick={() => {
                  submitButton("watch_add", movieItems);
                }}
                data-test="component-movielist-watch"
                size="sm"
                className="ml-2 mr-3 mt-3"
              >
                Watch Later
              </Button>
            )}
            {checkIfExist(watchList, id) && watchMenu && (
              <Button
                variant="outline-light"
                onClick={() => {
                  if (window.confirm("Remove From Watch later ?")) {
                    submitButton("watch_del", id);
                  }
                }}
                data-test="component-movielist-watch-del"
                size="sm"
                className="ml-2 mr-3 mt-3"
              >
                Remove Watch
              </Button>
            )}
            {!checkIfExist(favList, id) && !favMenu && !watchMenu && (
              <Button
                variant="outline-info"
                onClick={() => {
                  submitButton("fav_add", movieItems);
                }}
                data-test="component-movielist-fav"
                size="sm"
                className="ml-2 mr-3 mt-3"
              >
                Add Favourite
              </Button>
            )}
            {checkIfExist(favList, id) && favMenu && (
              <Button
                variant="outline-light"
                onClick={() => {
                  if (window.confirm("Remove From Favourites?")) {
                    submitButton("fav_del", id);
                  }
                }}
                data-test="component-movielist-fav-del"
                size="sm"
                className="ml-2 mr-3 mt-3"
              >
                Remove Favourite
              </Button>
            )}
          </ButtonToolbar>
        </Media.Body>
      </Media>
    </ul>
  );
};

MovieList.propTypes = {
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  clickButton: PropTypes.func,
  favMenu: PropTypes.bool,
  watchMenu: PropTypes.bool,
  favList: PropTypes.array,
  watchList: PropTypes.array
};

export default MovieList;
