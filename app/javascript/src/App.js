import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <p>Header</p>
        <Routes />
        <p>Footer</p>
      </BrowserRouter>
    )
  }
}

export default App;
