import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {AutoInit} from'materialize-css'
import 'material-design-icons/iconfont/material-icons.css'
import './App.css'

class App extends Component {
  componentDidMount(){
    AutoInit();
  }
  render() {
    return (
      <div className="App container">
      </div>
    );
  }
}

export default App;
