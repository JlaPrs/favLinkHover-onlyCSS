import React, { Component } from 'react';
import LinkHover from "./components/LinkHover";
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Choose a style and hover the link in the text</h1>
            <LinkHover />
        </header>
      </div>
    );
  }
}

export default App;
