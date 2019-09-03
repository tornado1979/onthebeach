import React from 'react'
import { Router, Route, Link  } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Home from './pages/home';
import About from './pages/about';
import Header from './components/Header';
import history from './helpers/history';

const Root = ({ store }) => (
   <Provider store={store}>
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
        </div>
      </div>
    </Router>
    </Provider>
)

export default Root
