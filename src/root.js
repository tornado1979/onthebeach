import React from 'react'
import { Router, Route  } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/home';
import Header from './components/Header';
import history from './helpers/history';

const Root = ({ store }) => (
   <Provider store={store}>
    <Router history={history}>
      <Header />
      <div className="main">
        <Route component={Home} exact path="/" />
      </div>
    </Router>
    </Provider>
)

export default Root
