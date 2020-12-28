import React from 'react';
import { Router } from "@reach/router";

import { Provider } from "react-redux";
import store from "./redux/store";

import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Home path='/' />
        <Login path='/login' />
      </Router>
    </Provider>
  )
}

export default App;