import React from 'react';
import Header from './component/header';
import './App.css';


class App extends React.PureComponent {
    
  handleClick = event => {
  //Updating the state based on the menu changes
    console.log("handle click");
  };

  render(){
          return (
                  <div className="App">
                    <Header clickMenu={this.handleClick}/>
                  </div>
                );
        }
}

export default App;
