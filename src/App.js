import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Page from './components/Page';
import './App.css';

class App extends Component {


  render() {

    return (

        <Router>
          <div className="app-container">
            <Navigation/>
            { /* Routes */ }
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/page/:pageId?" component={Page}></Route>
          </div>
        </Router>
    );
  }
}

export default App;
