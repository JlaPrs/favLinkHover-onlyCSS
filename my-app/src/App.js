import React, { Component } from 'react';
import HoverLink from "./components/HoverLink";
import ColorPicker from "./components/ColorPicker";
import './App.scss';

class App extends Component {
    constructor(props){
        super();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <ColorPicker />

            <HoverLink/>
        </header>
      </div>
    );
  }
}

export default App;
