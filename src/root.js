import React from 'react'
import { Router, Route, Link  } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Header from './components/Header';
import history from './helpers/history';

const Root = ({ store }) => (
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
      </div>
    </Router>
)

export default Root
