import React from 'react';
import Header from './component/header';
import MovieList from './component/movielist';
import { connect } from 'react-redux';
import { getMovies,getWatchList,getFavList,getStorage } from './actions';
import { addLocalState,deleteLocalState } from './localStorage';
import './App.css';



class App extends React.PureComponent {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getMovies();
    this.props.getStorage();
  }
    
  handleClick = (type) => {
    switch (type) {
      case 'watch_list':
        this.props.getWatchList();
        break;
      case 'fav_list':
        this.props.getFavList();
        break;
      default:
        this.props.getMovies();
    }
  };

  handleSubmit = (type,val)  => {
    switch (type) {
      case 'watch_add':
        addLocalState('watch',val);
        this.props.getWatchList();
        break;
      case 'fav_add':
        addLocalState('fav',val);
        this.props.getFavList();
        break;
      case 'fav_del':
        deleteLocalState('fav',val);
        if(this.props.gets.favMenu){
          this.props.getFavList();
        }
        break;
      case 'watch_del':
        deleteLocalState('watch',val);
        if(this.props.gets.watchMenu){
          this.props.getWatchList();
        }
        break;
      default:
        console.log('handleSubmit default action called.');
    }
  };

  render(){
          const { gets } = this.props;
          const data = gets.results;
          return (
                  <div className="App">
                    <Header clickMenu={this.handleClick} favMenu={gets.favMenu} watchMenu={gets.watchMenu}/>

                    {data.length > 0 &&
                        <div>
                          {data.map((get, index) => {
                            const {popularity,poster_path,title,overview,id} = get;
                            const movieListItems = {
                                  popularity:popularity,
                                  poster_path: poster_path,
                                  title:title,
                                  overview:overview,
                                  id:id,
                                  clickButton:this.handleSubmit,
                                  favMenu: gets.favMenu,
                                  watchMenu: gets.watchMenu,
                                  favList: gets.favList,
                                  watchList: gets.watchList
                              };
                            return (
                              <MovieList key={index} {...movieListItems} />
                            )
                          })}
                        </div>
                      }
                  </div>
                );
        }
}

const mapStateToProps = state => {
  return {
    gets: state.gets
  }
};



export default connect(mapStateToProps,{getMovies,getWatchList,getFavList,getStorage})(App);
