import React, { Component } from 'react';
import HoverLink from "./components/HoverLink";
import LinkHover from "./components/LinkHover";
import './App.scss';

class App extends Component {
    constructor(props){
        super();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <LinkHover />

            {/*<HoverLink/>*/}
        </header>
      </div>
    );
  }
}

export default App;
