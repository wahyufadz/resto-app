import React, { Component } from 'react';
import Main from './Main';
import { Provider } from 'unstated';
import { BrowserRouter } from 'react-router-dom'

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
      <div className="App">
        <Provider>
          <BrowserRouter>
            <Main/>
          </BrowserRouter>        
        </Provider>
      </div>
    );
  }
}

export default App;
